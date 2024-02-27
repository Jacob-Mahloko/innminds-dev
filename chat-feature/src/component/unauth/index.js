import React,{useContext} from 'react';
import { authStateContext } from '../../providers/authProvider/context';
import { Button, Result } from 'antd';


export default function WithAuthGuard(Component) {
    //status
    const isAuth=true;
    const content=isAuth?<Component/>:
        <Result style={{margin:'10%'}}
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
        />
    ;

    return ()=>content;
}
