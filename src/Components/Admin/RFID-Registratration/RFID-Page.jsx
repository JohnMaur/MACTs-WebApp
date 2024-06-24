import React, { useState } from 'react';
import { Layout  } from 'antd';
import CustomHeader from '../Header';
import MainSidebar from "../MainSidebar";
import RFID_Content from './RFID-Content';

const RFID_page = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <MainSidebar collapsed={collapsed} />
    <Layout style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <h1 className="mt-5 mb-2 text-2xl font-bold ml-10 ">RFID Registration</h1>
        <RFID_Content />
    </Layout>
  </Layout>
  );
};

export default RFID_page;