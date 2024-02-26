import React, { useState } from 'react';
import { Input } from 'antd';
import MenuButton from '../menuButton';

const { TextArea } = Input;

const textAreaStyle={
    position:'absolute',
    bottom:10,
    width:'80%',
    backgroundColor:'lightgray',
    fontSize:18
}
const MessageBar= () => {
  const [value, setValue] = useState('');

  return (
    <>
      <div style={{ margin: '0 auto' }} />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type message ..."
        autoSize={{ minRows: 3, maxRows: 4 }}
        style={textAreaStyle}
      />
      <MenuButton/>
    </>
  );
};

export default MessageBar ;