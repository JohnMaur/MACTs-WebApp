import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from './Header';
import CustomContent from './Content';
import MainSidebar from './MainSidebar';

const Admin_landingPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <CustomContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default Admin_landingPage;