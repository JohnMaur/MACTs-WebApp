import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import userImg from '../../../assets/user.png';
import socketIOClient from 'socket.io-client';

const attendanceServer = 'http://localhost:2727';
const studentInfoServerUrl = 'http://localhost:2526';
const { Content: AntdContent } = Layout;

const TeacherContent = ({ borderRadiusLG }) => {
  const [currentTagData, setCurrentTagData] = useState('');
  const [currentStudentInfo, setCurrentStudentInfo] = useState(null);
  const [currentTapStatus, setCurrentTapStatus] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const socket = socketIOClient(attendanceServer);

    socket.on('tagData', receivedData => {
      isValidTagData(receivedData).then((isValid) => {
        if (isValid) {
          setCurrentTagData(receivedData);
          setCurrentTime(new Date().toLocaleString()); // Update current time when tagData changes
          fetchStudentInfo(receivedData);
        }
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const isValidTagData = async (tagData) => {
    try {
      const response = await fetch(`${studentInfoServerUrl}/studentinfo`);
      const data = await response.json();
      const isValid = data.some(student => student.tagValue === tagData);
      return isValid;
    } catch (error) {
      console.error('Error fetching student information:', error);
      return false;
    }
  };

  const fetchStudentInfo = async (tagData) => {
    try {
      const response = await fetch(`${studentInfoServerUrl}/studentinfo`);
      const data = await response.json();
      const matchedStudent = data.find(student => student.tagValue === tagData);

      if (matchedStudent) {
        setCurrentStudentInfo(matchedStudent);

        // Clear the data after 10 seconds
        setTimeout(() => {
          setCurrentStudentInfo(null);
        }, 10000);
      } else {
        setCurrentStudentInfo(null);
      }
    } catch (error) {
      console.error('Error fetching student information:', error);
    }
  };

  return (
    <AntdContent className="shadow-md"
      style={{
        margin: '24px 16px',
        minHeight: 280,
        background: "rgb(252, 252, 252)",
        borderRadius: 12,
        display: "flex"
      }}
    >
      {currentStudentInfo && (
        <>
          <div className='border-solid border-r w-1/3 m-0 h-full'>
            <div className='shadow-sm w-full h-[60%] flex justify-center items-center'>
              {currentStudentInfo.student_profile ? (
                <img
                  src={currentStudentInfo.student_profile}
                  alt="Profile"
                  className="m-4 mt-4.5 w-60 h-60 bg-cover p-7 rounded-full"
                />
              ) : (
                <img
                  src={userImg}
                  alt="Profile"
                  className="m-4 mt-4.5 w-60 h-60 bg-cover p-7"
                />
              )}

            </div>
          </div>

          <div className='w-2/3 h-full py-14 px-10 flex items-center'>
            <div className='space-y-4'>
              <p className='librarian-text'>TUP ID: <span className='font-semibold'>{currentStudentInfo.studentInfo_tuptId}</span></p>
              <p className='librarian-text'>Name: <span className='font-semibold'>{`${currentStudentInfo.studentInfo_first_name} ${currentStudentInfo.studentInfo_middle_name} ${currentStudentInfo.studentInfo_last_name}`}</span></p>
              <p className='librarian-text'>Course: <span className='font-semibold'>{currentStudentInfo.studentInfo_course}</span></p>
              <p className='librarian-text'>Section: <span className='font-semibold'>{currentStudentInfo.studentInfo_section}</span></p>
              <p className='librarian-text'>Time: <span className='font-semibold'>{currentTime}</span></p>
            </div>
          </div>
        </>
      )}

      {!currentStudentInfo && (
        <>
          <div className='border-solid border-r w-1/3 m-0 h-full'>
            <div className='shadow-sm w-full h-[60%] flex justify-center items-center'>
              <img
                src={userImg}
                alt="Profile"
                className="m-4 mt-4.5 w-60 h-60 bg-cover p-7"
              />
            </div>
          </div>

          <div className='w-2/3 h-full py-14 px-10 flex items-center'>
            <div className='flex justify-center w-full'>
              <p className='sm:text-xl md:text-3xl lg:text-5xl 2xl:text-8xl font-sans font-bold text-gray-500'>TAP YOUR RFID CARD</p>
            </div>
          </div>
        </>
      )}
    </AntdContent>
  );
};

export default TeacherContent;
