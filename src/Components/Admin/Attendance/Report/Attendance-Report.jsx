import React from 'react';
import { Layout } from 'antd';
import AttendanceReportTable from './Attendance-report-table';

const { Content: AntdContent } = Layout;

const AttendanceReport = ({ colorBgContainer, borderRadiusLG }) => {
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
        <AttendanceReportTable />
      </div>
    </AntdContent>
  );
};

export default AttendanceReport;
