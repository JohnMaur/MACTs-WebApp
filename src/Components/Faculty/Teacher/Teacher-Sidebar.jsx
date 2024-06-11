import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { IdcardOutlined, SolutionOutlined, LogoutOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const TeacherSidebar = ({ collapsed }) => {
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
        openKeys={openKeys} // Set openKeys explicitly
        onOpenChange={handleOpenChange}
      >
        <Menu.Item key="/dashboard/Teacher" icon={<AppstoreOutlined />}>
          <Link to="/dashboard/Teacher">Dashboard</Link>
        </Menu.Item>

        <SubMenu key="Attendance" title="Attendance" icon={<SolutionOutlined />}>
        <Menu.Item key="/BTVTEICT-CP-1D" icon={<SolutionOutlined />}>
            <Link to="/BTVTEICT-CP-1D" icon={<SolutionOutlined />}>BTVTEICT-CP-1D</Link>
          </Menu.Item>
          <Menu.Item key="/BTVTEICT-CP-2D" icon={<SolutionOutlined />}>
            <Link to="/BTVTEICT-CP-2D">BTVTEICT-CP-2D</Link>
          </Menu.Item>
          <Menu.Item key="/BTVTEICT-CP-3D" icon={<SolutionOutlined />}>
            <Link to="/BTVTEICT-CP-3D">BTVTEICT-CP-3D</Link>
          </Menu.Item>
          <Menu.Item key="/BTVTEICT-CP-4D" icon={<SolutionOutlined />}>
            <Link to="/BTVTEICT-CP-4D">BTVTEICT-CP-4D</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/Student/RFID/Registration" icon={<IdcardOutlined />}>
          <Link to="/Student/RFID/Registration">RFID Registration</Link>
        </Menu.Item>

        <Menu.Item key="/login" icon={<LogoutOutlined />}>
          <Link to="/login">Log out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default TeacherSidebar;
