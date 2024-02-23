import React, { useState, useEffect } from "react";
import {
    collection,
    addDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
  } from "firebase/firestore";
import { db } from "../../firebase-config";
import withAuthGuard from "../unauth";

const Chat=()=>{
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage]=useState("");
    const eventid="maths-grade11";
    const subjectChatRef= collection(db,"subjectGradeChat");
    
    useEffect(() => {
        const queryMessages = query(
          subjectChatRef,
          where("subjectId","==",eventid),
          orderBy("createdTime")
        );

        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
              messages.push({ ...doc.data(), id: doc.id });
            });
            console.log(messages);
            setMessages(messages);
          });
      
          return () => unsuscribe();
        }, []);
    
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(newMessage==="") return;

        await addDoc(subjectChatRef,{
            message:newMessage,
            userid:'mosa',
            subjectId:eventid,
            createdTime: serverTimestamp()
        });

        setNewMessage('')

    };
    return (
    <div className="chat-app">
        <div className="header">
        <h1>Welcome to: {eventid.toUpperCase()}</h1>
      </div>

      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            user:  <span className="user">{message.userid}</span> 
            <br/>
            message:  <span>{message.message}</span>
            <br/>
            date:  {toString(message.createdTime)}
          </div>
        ))}
      </div>
        <form onSubmit={handleSubmit} className="new-message-form">
        <input
            className="new-message-input"
            placeholder="type something"
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}
        />
        <button type="submit" className="send-button">send message</button>
        </form>
    </div>);
}
//const AuthChat=withAuthGuard(Chat)
export default Chat;