import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card, Flex } from 'antd';
import  './index.css';

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

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='main-container'>
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
        name="username"
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
        <Button type="primary" htmlType="submit" className="login-form-button">
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