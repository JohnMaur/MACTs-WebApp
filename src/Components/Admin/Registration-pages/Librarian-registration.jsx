import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../Header';
import LibrarianRegistration from '../Registration/Librarian';
import MainSidebar from "../MainSidebar";

const { Content: AntdContent } = Layout;

const Librarian = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <MainSidebar collapsed={collapsed} />
    <Layout>
      <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <AntdContent style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
        <LibrarianRegistration />
      </AntdContent>
    </Layout>
  </Layout>
  );
};

export default Librarian;