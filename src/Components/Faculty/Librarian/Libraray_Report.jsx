import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../../Admin/Header';
import Librarian_sidebar from './Librarian_sidebar';
import LibraryContent from '../../Admin/Report/Library/Library-content';

const LibraryReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Librarian_sidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <LibraryContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default LibraryReport;