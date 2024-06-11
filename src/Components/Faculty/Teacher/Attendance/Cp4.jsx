import React, { useState } from 'react';
import { Layout } from 'antd';
import TeacherSidebar from '../Teacher-Sidebar';
import CustomHeader from '../../../Admin/Header';
import BTVTEICT_CP_4D from '../../../Admin/Student/BTVTEICT-CP-4D';

const Cp4 = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TeacherSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <BTVTEICT_CP_4D/>
      </Layout>
    </Layout>
  );
};

export default Cp4;