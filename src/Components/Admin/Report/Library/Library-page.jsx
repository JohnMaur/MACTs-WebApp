import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import MainSidebar from '../../MainSidebar';
import CustomHeader from '../../Header';
import LibraryContent from './Library-content';

const AdminLibraryReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <LibraryContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default AdminLibraryReport;