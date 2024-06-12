import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import MainSidebar from "../../MainSidebar";
import CustomHeader from "../../Header";
import AttendanceReport from './Attendance-Report';

const AttendancePageReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh" }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <AttendanceReport colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default AttendancePageReport;