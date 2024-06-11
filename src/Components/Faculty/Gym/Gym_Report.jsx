import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../../Admin/Header';
import GymSidebar from './Gym_sidebar';
import GymContent from '../../Admin/Report/Gym/Gym-content';

const GymReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GymSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <GymContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default GymReport;