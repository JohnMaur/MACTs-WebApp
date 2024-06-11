import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../Header';
import GymRegistration from '../Registration/Gym';
import MainSidebar from "../MainSidebar";

const { Content: AntdContent } = Layout;

const Gym = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <MainSidebar collapsed={collapsed} />
    <Layout>
      <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <AntdContent style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
        <GymRegistration />
      </AntdContent>
    </Layout>
  </Layout>
  );
};

export default Gym;