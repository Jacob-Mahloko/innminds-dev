import { ProductOutlined,OpenAIOutlined,TrophyOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';
const GameButton = (props) => {
    
    const {showModal,trophyshowModal}=props;
    console.log(showModal,'hello')
    return (
  <>
    <FloatButton.Group
      trigger="click"
      type='primary'
      style={{
        right: 70,
      }}
      icon={<ProductOutlined />}
    >
      <FloatButton icon={<TrophyOutlined onClick={trophyshowModal}/>}/>
      <FloatButton icon={<OpenAIOutlined onClick={showModal} />} />
    </FloatButton.Group>
  </>
);}
export default GameButton;
