import React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const CustomHeader = ({ collapsed, setCollapsed }) => {
  return (
    <Header style={{ padding: 0, background: "white", fontSize: 20, fontWeight: "bold", }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{ fontSize: '16', fontWeight: "bold", width: 64, height: 64 }}
      />
      MACTs
    </Header>
  );
};

export default CustomHeader;
