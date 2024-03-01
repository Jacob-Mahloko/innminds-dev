import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card, message,Flex } from 'antd';
import  './index.css';
import { useStateContext } from '../../providers/authProvider';
import { useActionContext } from '../../providers/authProvider';
import { useNavigate } from "react-router-dom";


const cardStyle = {
    width: 1200,
    padding:10,
    margin:50,
    
};

const imgStyle = {
    display: 'block',
    width: 700,
    height:500
};

const ButtonStyle={

}



const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (username='hello') => {
    messageApi.open({
      type: 'success',
      content: `Welcome, ${username}`,
    });
  };
  const error = (msg) => {
    messageApi.open({
      type: 'error',
      content: msg,
    });
  };
  
  const onFinish =async (values) => {
    try{
      await login(values);
      history('/Chat');
    }catch(err){
      error(err);
    }
    
    console.log('updated state',status);
  };
  
  
  const {login,logout}=useActionContext();

  const status=useStateContext();
  const history=useNavigate('/Chat');
  
  return (
    

    <div className='main-container'>
      {contextHolder}
    <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding:20,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="./home.png"
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 20,
        }}
      >
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <h1 className='login-form-main-heading'>Log in</h1>
      <Form.Item
        name="userNameOrEmailAddress"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>

      </Form.Item>
      
      <Form.Item>
        <Button style={ButtonStyle} type='primary' htmlType="submit" className="login-form-button" >

          Log in
        </Button>
      </Form.Item>

      <Form.Item >
        <Button type="default" htmlType="submit" className="signup-form-button">
          Sign up
        </Button>
      </Form.Item>
    </Form>
      </Flex>
    </Flex>
  </Card>
  </div>
);
};

export default Login;