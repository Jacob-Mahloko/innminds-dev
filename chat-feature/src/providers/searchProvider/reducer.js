import { handleActions } from "redux-actions";
import { SearchActionEnum } from "./actions";

export const reducer=handleActions({
    [SearchActionEnum.searchUserName]:(state,action)=>({
      user:action.payload  
    })
},{})