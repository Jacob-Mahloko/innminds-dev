import './index.css';
import WithAuthGuard from "../../component/unauth";
import React, { useEffect, useState } from 'react';
import { useSearch } from '../../providers/searchProvider';
import { Avatar, Col, Divider, Drawer, List, Row , Button,Tabs, Card, Flex, Typography,AutoComplete} from 'antd';
import MessageBar from '../../component/messagesBar';
import Profile from '../profile';
import GameButton from '../../component/gameButton';
import PopUp from '../../component/popUp/quiz';
import Trophy from '../../component/popUp/trophy';
import { RestTwoTone } from '@ant-design/icons';


const cardStyle = {
  width: '100%',
  height: '100vh',
  justifyContent:'center'
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

const tabStyle={
  position:'absolute',
  bottom:20,
  width:'100%',
  marginLeft:'18%'
}


//Chat Component
const Chat = () => {

  //search function 
  //search options

  const [searchState,searchStateChangers] = useSearch();

  const [sd,setSd]=useState([]);
  
  //Get Data from API
  useEffect(()=>{searchData()},[])

  const searchData=async ()=>
  {
    try{
      const res=await searchStateChangers();
      setSd(()=>res.map((d)=>({value:d?.username})));
    }catch(err){
      console.log(err)
    }
  }
  //search list setter

  const options =[...sd];
  
  const OnSelect=(value)=>{
    console.log(value)
  }
 
  //drawer state opener
  const [open, setOpen] = useState(false);
  //profile state opener
  const [profileOpen,setProfileOpen]=useState(false);

  //functions to manipulate state of drawer
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  
  //Navigation Tabs
  
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

  const [ChatTabState,setTabState]=useState(true);

  const onChange = (key) => {
    if(key==='1'){
      setTabState(()=>true);
    }else if(key='2'){
      setTabState(()=>false);
    }
  };
  //cards in the drawer
  const { Meta } = Card;

  //pop for the quiz

  const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  //pop for showing leader board

  const [trophyisModalOpen, setTrophyIsModalOpen] = useState(false);
    const trophyshowModal = () => {
      setTrophyIsModalOpen(true);
    };
    const trophyhandleOk = () => {
      setTrophyIsModalOpen(false);
    };
    const trophyhandleCancel = () => {
      setTrophyIsModalOpen(false);
    };
  
  return (
     
  <div className="chat-container">

    <div className='searchHeader' style={{width:'100%',height:'80px',backgroundColor:'lightgray',display:'flex',alignItems:'center'}}>
    <AutoComplete
      popupMatchSelectWidth={500}
      style={{
        width: '50%',
      height:'50px',
      marginLeft:50,
      fontSize:14
      }}
      allowClear
      options={options}
      onSelect={OnSelect}
      placeholder="Type in username"
      filterOption={(inputValue, option) =>
      option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <h1 style={{position:'absolute',right:20,fontFamily:'sans-serif'}}>The Social</h1>
    </div>
    
    <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex style={{width:'100%'}} >
        {(!open&&!profileOpen)&&<img
          alt="avatar"
          src="./side-chat.gif"
          style={imgStyle}
        />}

        {profileOpen&&<Profile profileOff={setProfileOpen}/>}

        <div className='list'>
        <List
        dataSource={(ChatTabState?[
          {
            id: 1,
            name: 'Israel',
          },
          {
            id: 2,
            name: 'Tshepo',
          },
        ]:[
          {
            id:1,
            name:'Boxfusion dev Group'
          },
          {
            id:2,
            name:'Friends and Family'
          },
          {
            id:2,
            name:'Honours Group'
          }
        ])}

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
                <Avatar src="./profile.jpg" />
              }
              //clicking on profile must take you some where
              title={<a onClick={(e)=>{setProfileOpen(true)}}>{item.name}</a>}
              description="Coming soon..."
            />
          </List.Item>
        )}
      />
      {isModalOpen && <PopUp isModalOpen={isModalOpen} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel}/>}
      {trophyshowModal && <Trophy trophyisModalOpen={trophyisModalOpen} trophyhandleOk={trophyhandleOk} trophyhandleCancel={trophyhandleCancel}/>}
      <GameButton showModal={showModal} trophyshowModal={trophyshowModal}/>
      
      <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={onChange}
        style={tabStyle}
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
      </Drawer>
      </div>
      </Flex>
    </Card>

  </div>
  );
};

export default WithAuthGuard(Chat);