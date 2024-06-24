import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../Header';
import MainSidebar from "../MainSidebar";
import TeacherRegistration from '../Registration/Teacher';

const { Content: AntdContent } = Layout;

const Teacher = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <MainSidebar collapsed={collapsed} />
    <Layout style={{ maxHeight: "100vh", overflowY: "auto"  }}>
      <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <AntdContent style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
        <TeacherRegistration />
      </AntdContent>
    </Layout>
  </Layout>
  );
};

export default Teacher;