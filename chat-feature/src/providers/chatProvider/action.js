import { createAction } from "redux-actions";

export const MessagesEnums={
    getUserMessages:'USER_MESSAGE',
    sendUserMessages:'SEND_MESSAGE'
}

export const getMessagesUser=createAction(MessagesEnums.getUserMessages,(payload)=>payload);
//decide what this changes
export const sendMessageUser= createAction(MessagesEnums.sendUserMessages)