import { handleActions } from "redux-actions";
import { authActionEnums } from "./actions";

export const reducer= handleActions({
    [authActionEnums.login]:(state,action)=>({...state,authenticated:true,username:action.payload}),
    [authActionEnums.logout]: (state,action)=>({...state,authenticated:false,user:{}}),
    [authActionEnums.createUser]:(state,action)=>({...state,authenticated:true,user:action.payload}),
    [authActionEnums.getUser]:(state,action)=>({...state,user:action.payload})
},{authenticated:false,username:true})