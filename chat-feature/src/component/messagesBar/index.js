import React, { useState } from 'react';
import {RightCircleFilled} from '@ant-design/icons'
import { Input } from 'antd';
import './index.css';
const { TextArea } = Input;

const textAreaStyle={
    position:'absolute',
    bottom:30,
    width:'80%',
    backgroundColor:'lightgray',
    fontSize:18
}
const MessageBar= () => {
  const [value, setValue] = useState('');

  return (
    <div className='message-area'>
      <div style={{ margin: '0 auto' }} />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type message ..."
        autoSize={{ minRows: 3, maxRows: 4 }}
        style={textAreaStyle}
      />
      <RightCircleFilled style={{fontSize:75,position:'absolute',bottom:40,right:20}} />
    </div>
  );
};

export default MessageBar ;