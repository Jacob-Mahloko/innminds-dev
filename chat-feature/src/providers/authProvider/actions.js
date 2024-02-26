import {createAction} from 'redux-actions';

export const authActionEnums = {
    login:'LOGIN',
    logout: 'LOGOUT'
};

export const authLoginAuth= createAction(authActionEnums.login,(payload)=>payload);
export const authLogoutAuth= createAction(authActionEnums.logout);