import React from 'react';
import { Layout } from 'antd';
import AttendancenTable from './Attendance-table';

const { Content: AntdContent } = Layout;

const AttendanceContent = ({ colorBgContainer, borderRadiusLG }) => {
  return (
    <AntdContent
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        maxHeight: "100vh",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        overflowY: 'auto', 
        overflowX: "auto",
      }}
    >
      <div>
        <AttendancenTable />
      </div>
    </AntdContent>
  );
};

export default AttendanceContent;
