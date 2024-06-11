import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from '../../Admin/Header';
import GuardSidebar from './GuardSidebar';
import GuardContent from './Guard_content';

const GuardLandingPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GuardSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <GuardContent/>
      </Layout>
    </Layout>
  );
};

export default GuardLandingPage;