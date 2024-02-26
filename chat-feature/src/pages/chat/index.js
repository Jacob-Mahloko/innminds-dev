import './index.css';
import withAuthGuard from "../../component/unauth";
import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row , Button, Card, Flex, Typography} from 'antd';
import MessageBar from '../../component/messagesBar';
import MenuButton from '../../component/menuButton';

const cardStyle = {
  width: '100%',
  height: '100vh'
};
const imgStyle = {
  width: '60%'
};

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const Chat = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  //cards in the drawer
  const { Meta } = Card;
  return (
     
  <div className="chat-container">
    <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex style={{width:'100%'}} >
        <img
          alt="avatar"
          src="./side-chat.gif"
          style={imgStyle}
        />
        <div className='list'>
        <List
        dataSource={[
          {
            id: 1,
            name: 'Israel',
          },
          {
            id: 2,
            name: 'Tshepo',
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showDrawer} key={`a-${item.id}`}>
                View Chat
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="./profile.png" />
              }
              //clicking on profile must take you some where
              title={<a href="#">{item.name}</a>}
              description="Coming soon..."
            />
          </List.Item>
        )}
      />
        <Drawer width={'50%'} title="Israel" placement="left" closable={true} onClose={onClose} open={open} style={{backgroundColor:'gainsboro'}}>
        <Row>
          <Col span={12}>
            <Card
              style={{
                width: 350,
                marginTop: 20,

              }}

              > 
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                title="Israel"
                description="Hey guys please dont forget to finish your project"
              />
            </Card>
          </Col>
          <Col span={12}></Col>
        </Row>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
          <Card
            style={{
              width: 350,
              marginTop: 20,
              
            }}

            > 
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
              title="Jacob"
              description="Hey guys please dont forget to finish your project"
            />
          </Card>
        </Col>
        </Row>
        <MessageBar/>
        {/* <MenuButton/> */}
      </Drawer>
      </div>
      </Flex>
    </Card>
  </div>
  );
};

export default withAuthGuard(Chat);