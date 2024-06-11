import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { IdcardOutlined, UserAddOutlined, SolutionOutlined, LogoutOutlined, FileDoneOutlined, AppstoreOutlined, } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ collapsed }) => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([]);

  // Function to handle submenu open keys
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  useEffect(() => {
    // Get the current path from location
    const currentPath = location.pathname;
    // Extract the submenu key from the path
    const submenuKey = currentPath.split('/')[2];
    // Update the openKeys state with the submenu key
    setOpenKeys(submenuKey ? [submenuKey] : []);
  }, [location.pathname]);


  return (
    <Sider
      trigger={null} collapsible collapsed={collapsed}
      width={250}
      style={{
        overflow: 'auto',
        height: '100vh',
        left: 0,
      }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        selectedKeys={[location.pathname]}
        openKeys={openKeys} 
        onOpenChange={handleOpenChange}
      >
        <Menu.Item key="/dashboard" icon={<AppstoreOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="/Registration" icon={<UserAddOutlined />} title="Faculty Registration">
          <Menu.Item key="/Registration/Teacher">
            <Link to="/Registration/Teacher">Teacher</Link>
          </Menu.Item>
          <Menu.Item key="/Registration/Registrar">
            <Link to="/Registration/Registrar">Registrar</Link>
          </Menu.Item>
          <Menu.Item key="/Registration/Librarian">
            <Link to="/Registration/Librarian">Librarian</Link>
          </Menu.Item>
          <Menu.Item key="/Registration/Gym">
            <Link to="/Registration/Gym">Gym personnel</Link>
          </Menu.Item>
          <Menu.Item key="/Registration/Guard">
            <Link to="/Registration/Guard">Guard</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="Report" icon={<FileDoneOutlined />} title="Report">
          <Menu.Item key="/Report/Gatepass">
            <Link to="/Report/Gatepass">Entrance/Gate</Link>
          </Menu.Item>
          <Menu.Item key="/Report/Registrar">
            <Link to="/Report/Registrar">Registrar</Link>
          </Menu.Item>
          <Menu.Item key="/Report/Gym">
            <Link to="/Report/Gym">Gym</Link>
          </Menu.Item>
          <Menu.Item key="/Report/Library">
            <Link to="/Report/Library">Library</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="Attendance" icon={<SolutionOutlined />} title="Attendance">
          <Menu.Item key="/Attendance/BTVTEICT-CP-1D">
            <Link to="/Attendance/BTVTEICT-CP-1D">BTVTEICT-CP-1D</Link>
          </Menu.Item>
          <Menu.Item key="/Attendance/BTVTEICT-CP-2D">
            <Link to="/Attendance/BTVTEICT-CP-2D">BTVTEICT-CP-2D</Link>
          </Menu.Item>
          <Menu.Item key="/Attendance/BTVTEICT-CP-3D">
            <Link to="/Attendance/BTVTEICT-CP-3D">BTVTEICT-CP-3D</Link>
          </Menu.Item>
          <Menu.Item key="/Attendance/BTVTEICT-CP-4D">
            <Link to="/Attendance/BTVTEICT-CP-4D">BTVTEICT-CP-4D</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/RFID/Registration" icon={<IdcardOutlined />}>
          <Link to="/RFID/Registration">RFID Registration</Link>
        </Menu.Item>
        <Menu.Item key="/login" icon={<LogoutOutlined />}>
          <Link to="/login/admin">Log out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;