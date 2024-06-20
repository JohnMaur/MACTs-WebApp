import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../Header';
import RegistrarRegistration from '../Registration/Registrar';
import MainSidebar from "../MainSidebar";

const { Content: AntdContent } = Layout;

const Registrar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <MainSidebar collapsed={collapsed} />
    <Layout style={{ maxHeight: "100vh" }}>
      <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <AntdContent style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
        <RegistrarRegistration />
      </AntdContent>
    </Layout>
  </Layout>
  );
};

export default Registrar;