import React, { useState } from 'react';
import { Button, Modal,theme,Steps,message, Input, Radio, Space } from 'antd';

//answers
const answers=['github','gitlab','local','usb'];

//questions


const PopUp = ({ showModal,handleOk,handleCancel ,isModalOpen}) => {

    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };

    const steps = [
        {
          title: '1',
          content: (
            <>
                <h4>Question 1</h4>
                <p>Where did you save your code?</p>
                <Radio.Group onChange={onChange} value={value} style={{position:'relative',alignItems:'flex-start'}}>
                    <Space direction="horizontal">
                      {answers.map((val,i)=>(<Radio value={i}>{val}</Radio>))}
                    </Space>
                </Radio.Group>
            </>),
        },
        {
          title: '2',
          content: (
            <>
                <h4>Question 2</h4>
                <p>Where did you save your code?</p>
                <Radio.Group onChange={onChange} value={value} style={{position:'relative',alignItems:'flex-start'}}>
                    <Space direction="horizontal">
                      {answers.map((val,i)=>(<Radio value={i}>{val}</Radio>))}
                    </Space>
                </Radio.Group>
            </>),
        },
        {
          title: '3',
          content: (
            <>
                <h4>Question 3</h4>
                <p>Where did you save your code?</p>
                <Radio.Group onChange={onChange} value={value} style={{position:'relative',alignItems:'flex-start'}}>
                    <Space direction="horizontal">
                      {answers.map((val,i)=>(<Radio value={i}>{val}</Radio>))}
                    </Space>
                </Radio.Group>
            </>),
        },
        {
            title: '4',
            content: (
                <>
                    <h4>Question 4</h4>
                    <p>Where did you save your code?</p>
                    <Radio.Group onChange={onChange} value={value} style={{position:'relative',alignItems:'flex-start'}}>
                        <Space direction="horizontal">
                          {answers.map((val,i)=>(<Radio value={i}>{val}</Radio>))}
                        </Space>
                    </Radio.Group>
                </>),
        },
        {
            title: '5',
            content: (
            <>
                <h4>Question 5</h4>
                <p>Where did you save your code?</p>
                <Radio.Group onChange={onChange} value={value} style={{position:'relative',alignItems:'flex-start'}}>
                    <Space direction="horizontal">
                      {answers.map((val,i)=>(<Radio value={i}>{val}</Radio>))}
                    </Space>
                </Radio.Group>
            </>),
        },
      ];

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    
    const contentStyle = {
      lineHeight: '50px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
      
    };

    
    
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal  title="General Knowledge Quiz" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footerBg={'red'}>
          <Steps style={{padding:10}} current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
              style={{
                marginTop: 30,
                width:'500px'
              }}
            >
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button
                  style={{
                    margin: '0 8px',
                  }}
                  onClick={() => prev()}
                >
                  Previous
                </Button>
              )}
            </div>
        </Modal>
      </>
    );
};

export default PopUp;