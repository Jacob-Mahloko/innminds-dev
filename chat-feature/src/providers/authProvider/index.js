import React,{useReducer,useContext} from 'react'
import { authActionContext,authStateContext } from "./context";
import { authLoginAuth,authLogoutAuth } from "./actions";
import { reducer } from "./reducer";


export const AuthProvider=(props)=>{

    const [state,dispatch]=useReducer(reducer,{authenticated:false,username:''});

    const getState=()=>({...state});

    const login=(username)=>{
        dispatch(authLoginAuth(username));
    }

    const logout=()=>{
        dispatch(authLogoutAuth());
    }

    return (
        <authStateContext.Provider  value={getState()}>
            <authActionContext.Provider value={{login,logout}}>
                {props.children}
            </authActionContext.Provider>
        </authStateContext.Provider>
    );
}

export const useStateContext=()=>{
    const context=useContext(authStateContext);
    if(context===undefined){
        alert('Error: Cannot access out AuthProvider')
        return;
    }
    return context;
}

export const useActionContext=()=>{
    const context=useContext(authActionContext);
    if(context===undefined){
        alert('Error: Cannot access out AuthProvider')
        return;
    }
    return context;
}

export const useAuth=()=>{
    return [useStateContext(),useActionContext()];
}