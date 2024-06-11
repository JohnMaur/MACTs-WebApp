import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from '../../../Admin/Header';
import TeacherSidebar from '../Teacher-Sidebar';
import BTVTEICT_CP_1D from '../../../Admin/Student/BTVTEICT-CP-1D';

const Cp1 = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TeacherSidebar collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh' }}>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <BTVTEICT_CP_1D/>
      </Layout> 
    </Layout>
  );
};

export default Cp1;