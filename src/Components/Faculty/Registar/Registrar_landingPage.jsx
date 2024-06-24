import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from '../../Admin/Header';
import RegistrarSidebar from './RegistrarSidebar';
import RegistrarContent from './Registrar_content';

const RegistrarLandingPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <RegistrarSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh", overflowY: "auto"  }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <RegistrarContent/>
      </Layout>
    </Layout>
  );
};

export default RegistrarLandingPage;