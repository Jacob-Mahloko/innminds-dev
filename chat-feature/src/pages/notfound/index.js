import React ,{useState} from 'react';
import MenuButton from '../../component/menuButton';
import { Button, Result} from 'antd';
import MenuTab from '../../component/swictchButton';

import {HubConnectionBuilder} from '@microsoft/signalr';
const NotFound=()=>{
    const [message,setMessage]=useState();
    const [username,setUsername]=useState();
    const [state,setState]=useState();

    const conn = new HubConnectionBuilder().withUrl('https://localhost:7224/Chat')
    .withAutomaticReconnect().build();
    console.log(conn)
    //setState({conn});
    
   
    conn.on("RecieveMessage",(username,message)=>{
        let li=document.createElement('li');
        document.getElementById('messageList').appendChild(li);
        li.textContent=`${username} says ${message};`
    })
     
   

    const handle =(e)=>{
        e.preventDefault();
        conn.start();

        conn.invoke("SendMessage",username,message).then().catch(()=>console.log('failed'));
        
    }

    return (
    // <Result style={{margin:'10%'}}
    // status="404"
    // title="404"
    // subTitle="Sorry, could not find that page."
    // extra={<Button type="primary">Back Home</Button>}
    // />
        <>
        <form onSubmit={handle}>
        <label>Username</label>
        <input type='text' value={username}/>

        <label>Message</label>
        <input type='text' value={message}/>

        <button type='submit'>Sumbit</button>
        </form>

        <ul id='messagesList'>

        </ul>
        </>
    );
}

export default NotFound;