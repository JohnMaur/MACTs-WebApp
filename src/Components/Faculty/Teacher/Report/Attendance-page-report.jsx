import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import TeacherSidebar from '../Teacher-Sidebar';
import CustomHeader from '../../../Admin/Header';
import FacultyAttendanceReport from './Attendance-Report';

const FacultyAttendancePageReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TeacherSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh" }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <FacultyAttendanceReport colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default FacultyAttendancePageReport;