import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from './Header';
import CustomContent from './Content';
import MainSidebar from './MainSidebar';

const Admin_landingPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSidebar collapsed={collapsed} />
      <Layout>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <CustomContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default Admin_landingPage;

// Admin_landingPage.jsx
// import React from 'react'
// import MainLayout from '../MainLayout'
// import CustomContent from './Content';

// function Admin_landingPage() {
//   return (
//     <MainLayout>
//       <div>
//         <CustomContent/>
//       </div>
//     </MainLayout>
//   )
// }

// export default Admin_landingPage
