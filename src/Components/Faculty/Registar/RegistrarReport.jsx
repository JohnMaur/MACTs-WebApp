import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../../Admin/Header';
import RegistrarSidebar from './RegistrarSidebar';
import RegistrarContent from '../../Admin/Report/Registrar/Registrar-content';

const RegistrarReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <RegistrarSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh" }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <RegistrarContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG}/>
      </Layout>
    </Layout>
  );
};

export default RegistrarReport;