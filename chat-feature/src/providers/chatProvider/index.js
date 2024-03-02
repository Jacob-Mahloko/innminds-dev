import React ,{useContext,useReducer} from 'react'
import { messagesActionContext,messagesStateContext } from './context'
import { reducer } from './reducer'

const MessageProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,[]);

    const getState=()=>([...state])
    
    const getMessagesOfUser=async ()=>{
        const token=localStorage.getItem('token');
        try {
            const response = await fetch('https://localhost:44311/api/services/app/Message/GetAll',{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            });

            const res=await response.json();
            console.log(res);
        } catch (error) {   
            console.log(error)
        }
        
    }

    return (
        <messagesStateContext.Provider value={getState()}>
            <messagesActionContext value={getMessagesOfUser}>
                {props.children}
            </messagesActionContext>
        </messagesStateContext.Provider>
    );
}

export const useMessageState=()=>{
    const context = useContext(messagesStateContext);
    if(context==undefined){
        console.log('Cannot access Message Provider Outside the scope');
        return;
    }
    return context;
}

export const useMessageActions=()=>{
    const context = useContext(messagesActionContext);
    if(context==undefined){
        console.log('Cannot access Message Provider Outside the scope');
        return;
    }
    return context;
}

export const useMessages=()=>[useMessageState(),useMessageActions()];
export default MessageProvider;