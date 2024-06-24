import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from '../../Admin/Header';
import GymSidebar from './Gym_sidebar';
import GymContentDasboard from './Gym_content';

const GymLandingPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GymSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh', overflowY: "auto"  }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <GymContentDasboard/>
      </Layout>
    </Layout>
  );
};

export default GymLandingPage;