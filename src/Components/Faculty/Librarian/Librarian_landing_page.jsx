import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from '../../Admin/Header';
import Librarian_sidebar from './Librarian_sidebar';
import LibraryContent from './Library_content';

const Librarian_landingPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Librarian_sidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh", overflowY: "auto"  }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <LibraryContent/>
      </Layout>
    </Layout>
  );
};

export default Librarian_landingPage;