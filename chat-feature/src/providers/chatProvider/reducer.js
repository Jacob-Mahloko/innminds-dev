import { handleActions } from "redux-actions";
import { MessagesEnums } from "./action";

export const  reducer=handleActions({
    [MessagesEnums.getUserMessages]:(state,action)=>([...state,action.payload]),
    [MessagesEnums.sendUserMessages]:(state,action)=>([...state])
},[])