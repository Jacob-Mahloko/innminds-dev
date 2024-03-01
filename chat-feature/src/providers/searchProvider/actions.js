import { createAction } from "redux-actions";

//different search functions 

export const SearchActionEnum={
    searchUserName:'USERNAME'
}

export const SearchUsernameAction=createAction(SearchActionEnum.searchUserName,(payload)=>payload)