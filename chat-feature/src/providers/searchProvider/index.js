import React,{useContext,useReducer} from "react";
import { reducer } from "./reducer";
import { SearchUsernameAction } from "./actions";
import { searchActionContext,searchStateContext } from "./context";
import { useGet } from "restful-react";

const SearchProvider=(props)=>{

    const [state,dispatch]=useReducer(reducer,{});

    const getState=()=>{
        return state;
    }
    const getAllUsers=async()=>{
        const token = localStorage.getItem('token')
        try{
            const res=await fetch(
                'https://localhost:44311/api/services/app/Person/GetAll',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                }}
            ).then((data)=>data.json()).then((values)=>values?.result)
            return res.map(value=>({id:value.userId,username:value.userName}));
           
            return [];
        }catch(err){
            console.log(err)
        }
    }

    return (
        <searchStateContext.Provider value={getState()}>
            <searchActionContext.Provider value={getAllUsers}>
                {props.children}
            </searchActionContext.Provider>
        </searchStateContext.Provider>
    );

}

export const useSearchState=()=>{
    const context=useContext(searchStateContext);
    if(context ==undefined){
        console.log('Cannot Access');
        return;
    }
    return context;
}

export const useSearchAction=()=>{
    const context=useContext(searchActionContext);
    if(context ==undefined){
        console.log('Cannot Access');
        return;
    }
    return context;
}

export const useSearch = ()=>{
    return [useSearchState(),useSearchAction()];
}
export default SearchProvider;