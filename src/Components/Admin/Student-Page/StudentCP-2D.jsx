import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from '../Header';
import MainSidebar from '../MainSidebar';
import BTVTEICT_CP_2D from '../Student/BTVTEICT-CP-2D';

const StudentCp2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <BTVTEICT_CP_2D colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default StudentCp2;