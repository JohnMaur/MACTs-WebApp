import React, { useState } from 'react';
import { Layout } from 'antd';
import TeacherSidebar from '../Teacher-Sidebar';
import CustomHeader from '../../../Admin/Header';
import BTVTEICT_CP_3D from '../../../Admin/Student/BTVTEICT-CP-3D';

const Cp3 = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TeacherSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <BTVTEICT_CP_3D/>
      </Layout>
    </Layout>
  );
};

export default Cp3;