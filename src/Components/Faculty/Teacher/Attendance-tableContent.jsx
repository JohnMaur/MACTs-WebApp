import React from 'react';
import { Layout } from 'antd';
import FacultyAttendanceTable from './Attendance-table';

const { Content: AntdContent } = Layout;

const FacultyTeacherContent = ({ colorBgContainer, borderRadiusLG }) => {
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
        <FacultyAttendanceTable />
      </div>
    </AntdContent>
  );
};

export default FacultyTeacherContent;
