import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import axios from 'axios';

const DragIndexContext = createContext({
  active: -1,
  over: -1,
});

const dragActiveStyle = (dragState, id) => {
  const { active, over, direction } = dragState;
  let style = {};
  if (active && active === id) {
    style = {
      backgroundColor: 'gray',
      opacity: 0.5,
    };
  } else if (over && id === over && active !== over) {
    style =
      direction === 'right'
        ? {
            borderRight: '1px dashed gray',
          }
        : {
            borderLeft: '1px dashed gray',
          };
  }
  return style;
};

const TableBodyCell = (props) => {
  const dragState = useContext(DragIndexContext);
  return <td {...props} style={{ ...props.style, ...dragActiveStyle(dragState, props.id) }} />;
};

const TableHeaderCell = (props) => {
  const dragState = useContext(DragIndexContext);
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: props.id,
  });
  const style = {
    ...props.style,
    cursor: 'move',
    zIndex: isDragging ? 9999 : 1, // Adjusting z-index
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
          userSelect: 'none',
        }
      : {}),
    ...dragActiveStyle(dragState, props.id),
  };
  return <th {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};

const Modal = ({ isVisible, onClose }) => {
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (isVisible) {
      // Generate random code
      const randomCode = Math.random().toString(36).slice(2);
      setCode(randomCode);
      // Set current date
      const currentDate = new Date().toLocaleString();
      setDate(currentDate);
    }
  }, [isVisible]);

  const handleAddAttendance = () => {
    // Prepare attendance data
    const attendanceData = {
      attendance_description: description,
      attendance_code: code,
      attendance_date: date,
    };

    // Send POST request to your backend API to insert attendance data
    axios.post('http://localhost:2526/add-Attendance', attendanceData)
      .then(response => {
        // Handle success, maybe show a message to the user
        console.log('Attendance added successfully');
        // Close the modal
        onClose();
        alert('Attendance added successfully');
      })
      .catch(error => {
        // Handle error, maybe show an error message to the user
        console.error('Error adding attendance:', error);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[10000]"> {/* Updated z-index */}
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Add Attendance</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Attendance Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Auto Generated Code</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={code}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date Created</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={date}
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 active:opacity-40 transition-all font-bold py-2 px-6 rounded mr-4"
            onClick={handleAddAttendance}
          >
            ADD
          </button>
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 active:opacity-40 transition-all font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AttendanceTable = () => {
  const [dragIndex, setDragIndex] = useState({
    active: -1,
    over: -1,
  });
  const [columns, setColumns] = useState([
    {
      title: 'Attendance Description',
      dataIndex: 'attendance_description',
    },
    {
      title: 'Code',
      dataIndex: 'attendance_code',
    },
    {
      title: 'Date',
      dataIndex: 'attendance_date',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2526/attendance');
        const responseData = response.data;
        const transformedData = responseData.map((item) => ({
          key: item.attendance_id.toString(),
          attendance_description: item.attendance_description,
          attendance_code: item.attendance_code,
          attendance_date: item.attendance_date,
        }));
        setData(transformedData);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array means this effect will only run once on component mount

  useEffect(() => {
    // Filter data based on search text
    const filtered = data.filter((item) =>
      Object.values(item).some((value) => value.toLowerCase().includes(searchText.toLowerCase()))
    );
    // Reverse the filtered array to ensure the latest data is displayed first
    setFilteredData(filtered.reverse());
  }, [searchText, data]);

  const handleSearch = () => {
    setSearchText(searchText);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    })
  );

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setColumns((prevState) => {
        const activeIndex = prevState.findIndex((i) => i.dataIndex === active?.id);
        const overIndex = prevState.findIndex((i) => i.dataIndex === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
    setDragIndex({
      active: -1,
      over: -1,
    });
  };

  const onDragOver = ({ active, over }) => {
    const activeIndex = columns.findIndex((i) => i.dataIndex === active.id);
    const overIndex = columns.findIndex((i) => i.dataIndex === over?.id);
    setDragIndex({
      active: active.id,
      over: over?.id,
      direction: overIndex > activeIndex ? 'right' : 'left',
    });
  };

  const pagination = {
    pageSize: 5,
    position: ['bottomCenter'],
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <button
          className="text-white bg-blue-500 hover:bg-blue-700 active:opacity-40 transition-all font-bold py-2 px-10 rounded"
          onClick={() => setIsModalVisible(true)}
        >
          ADD
        </button>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="rounded-sm shadow-md border-[1px] border-solid border-gray-500 focus:outline-none">
            <input
              className="p-2 px-5 placeholder-gray-500"
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="p-2 px-3 border-solid border-l-[1px] border-gray-500" onClick={handleSearch}>
              <SearchOutlined />
            </button>
          </div>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        modifiers={[restrictToHorizontalAxis]}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        collisionDetection={closestCenter}
      >
        <SortableContext items={columns.map((i) => i.dataIndex)} strategy={horizontalListSortingStrategy}>
          <DragIndexContext.Provider value={dragIndex}>
            <Table
              rowKey="key"
              columns={columns}
              dataSource={filteredData}
              components={{
                header: {
                  cell: TableHeaderCell,
                },
                body: {
                  cell: TableBodyCell,
                },
              }}
              pagination={pagination}
            />
          </DragIndexContext.Provider>
        </SortableContext>
        <DragOverlay>
          <th
            style={{
              backgroundColor: 'gray',
              padding: 16,
            }}
          >
            {columns[columns.findIndex((i) => i.dataIndex === dragIndex.active)]?.title}
          </th>
        </DragOverlay>
      </DndContext>
      
      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </div>
  );
};

export default AttendanceTable;
