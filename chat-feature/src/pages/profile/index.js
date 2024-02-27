import React,{useState} from 'react';
import './index.css';
import {CloseOutlined} from '@ant-design/icons'
import {Card,Row,Col, Button} from 'antd'


const cardStyle={
    marginTop:'5%',
    width:'50%',
}

const rowStyle={
    padding:10
}

const buttonStyle={
    backgroundColor:'rgb(248, 180, 52)',
    width:'30%',
    marginTop:'30px',
    color:'white',
    fontWeight:'bold',
    height:40,
    borderRadius:'5px'
}

const tabList = [
    {
      key: 'Description',
      tab: 'Description',
    },
    {
      key: 'Interests',
      tab: 'Interests',
    },
];

  const contentList = {
    Description: <p>Hi, I am using the social</p>,
    Interests: <p>I am interested in playing soccer</p>,
};

const exitStyle={
    
}
const Profile=(props)=>{
    const [activeTabKey1, setActiveTabKey1] = useState('Description');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    return (
    <div className='profile'> 
        
            <img className='profileImage' src='./profile.jpg'/>
                <CloseOutlined onClick={(e)=>{props.profileOff(false)}}style={{position:'absolute',right:10,height:50,fontSize:30}} />
                <Card hoverable style={cardStyle} title='Contact Details'>
                    <Row style={rowStyle}>
                        <Col span={12}>
                            First Name
                        </Col>
                        <Col span={12}>
                            Last Name
                        </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col span={12}>
                            Jacob
                        </Col>
                        <Col span={12}>
                            Mahloko
                        </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col span={12}>
                            email:
                        </Col>
                        <Col span={12}>
                            google.mail@gmail.com
                        </Col>
                    </Row>
    
                </Card>
                <Card
                    hoverable
                    style={{
                      width: '50%',
                      marginTop:30,
                    }}
                    title="About me"
                    tabList={tabList}
                    activeTabKey={activeTabKey1}
                    onTabChange={onTab1Change}
                >         
                    {contentList[activeTabKey1]}
                </Card>
                <Button style={buttonStyle}>Edit</Button>
                
                
                
    </div>);
}

export default Profile;