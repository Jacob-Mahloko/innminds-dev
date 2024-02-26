import { handleActions } from "redux-actions";
import { authActionEnums } from "./actions";

export const reducer= handleActions({
    [authActionEnums.login]:(state,action)=>{
        const {payload}=action;
        return ({...state,authenticated:true,username:payload})
    },
    [authActionEnums.logout]: (state,action)=>{return {...state,authenticated:false,username:''}}
},{authenticated:false,username:true})