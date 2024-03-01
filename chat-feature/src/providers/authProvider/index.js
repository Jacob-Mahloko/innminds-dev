import React,{useReducer,useContext} from 'react'
import { authActionContext,authStateContext } from "./context";
import { authLoginAuth,authLogoutAuth } from "./actions";
import { reducer } from "./reducer";
import {useGet,useMutate} from 'restful-react'


export const AuthProvider=(props)=>{

    const [state,dispatch]=useReducer(reducer,{authenticated:false,username:''});

    const {mutate:loginHttp}=useMutate({
        path: 'https://localhost:44311/api/TokenAuth/Authenticate',
        verb:'POST'
    })

    const {mutate: creatUserHttp}=useMutate({
        path:'https://localhost:44311/api/services/app/Person/Create',
        verb:'POST'
    })

    const logOutHttp =()=>{
        //delete the token
    }

    
    const getState=()=>({...state});

    const login=async (payload)=>{
        try{
            const response = await loginHttp(payload);

            if(response.success){
                //save token
                localStorage.setItem('token',response.result.accessToken);
                console.log('state:',response)
                const Userdata = await getUser(response.result.userId);
                dispatch(authLoginAuth(Userdata))
            }
        }catch(err){
            throw (err.data.error.details)
        }
        
    }

    const logout=()=>{
        dispatch(authLogoutAuth());
        //token
        localStorage.removeItem('token')
    }

    const getUser=async (id)=>{

        //get token
        const token=localStorage.getItem('token');

        //api fetch call
        const response= await fetch(`https://localhost:44311/api/services/app/Person/Get?Id=${id}`,{
        method:'GET',
        cache:'no-cache',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
            }
        })

        const data = await response.json();
        return data.result;
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