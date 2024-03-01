import {createAction} from 'redux-actions';

export const authActionEnums = {
    login:'LOGIN',
    createUser:'CREATE',
    logout: 'LOGOUT',
    getUser:'GETUSER'

    
};

export const authLoginAuth= createAction(authActionEnums.login,(payload)=>payload);
export const authLogoutAuth= createAction(authActionEnums.logout);
export const authCreateUser = createAction(authActionEnums.createUser,(CreateUser)=>({CreateUser}));
export const authGetUserDetails = createAction(authActionEnums.getUser,(payload)=>payload)
