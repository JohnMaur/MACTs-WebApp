import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../../Admin/Header';
import GuardSidebar from './GuardSidebar';
import GatepassContent from '../../Admin/Report/Gatepass/Gatepass-content';

const GuardReport = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GuardSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: "100vh" }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <GatepassContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default GuardReport;