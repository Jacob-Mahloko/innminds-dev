
import { Button, Result } from 'antd';

export default function withAuthGuard(Component) {
    console.log(Component,'component')
    const isAuth=true;
    const content=isAuth?<Component/>:
        <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
        />
    ;

    return content;
}
