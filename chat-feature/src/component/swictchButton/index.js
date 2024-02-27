import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const onChange = (key) => {
    console.log(key);
  };

const items = [
    {
      key: '1',
      label: 'Chats',
    },
    {
      key: '2',
      label: 'Groups',
    }
  ];

const MenuTab = () => (
  <Tabs
    defaultActiveKey='1'
    items={items}
    onChange={onChange}
  />
);
export default MenuTab;