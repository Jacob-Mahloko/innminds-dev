import { createContext } from "react";

const messagesStateContext=createContext([]);
const messagesActionContext=createContext();

export {messagesActionContext,messagesStateContext}