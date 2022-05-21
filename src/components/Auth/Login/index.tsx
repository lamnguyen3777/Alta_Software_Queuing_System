import  React  ,{useState, FormEvent,useEffect, createContext  } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {  Form, Input, Button} from 'antd';
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { RootState } from '../../../configs/redux';
import { signin, setError } from '../../../configs/redux/actions/authAction';
import { Loading } from '../../index';
import classnames from 'classnames';


export interface ILoginProps {
  onClickForgotPassword:()=>void,
  successLogin:()=>void
}
type LoginProp = {
  username:string;
  password:string;
}

export function Login (props: ILoginProps) {
  const onClickForgotPassword = props.onClickForgotPassword;
  const successLogin = props.successLogin;
  const [account, setAccount] = useState ('');
  const [loading, setLoading] = useState(false);
  const [fail, setFail] = useState ('');
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const onFinish = (values: any) => {
    setAccount(values);
    const {email,password}=values;
 
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signin({email,password},
                           ()=>{setFail("false");successLogin();},
                           () => { setLoading(false); setFail("true");}));
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:');
  };
  return (
      <div className="login__container">
          <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="login__form"
        >
            <Form.Item
              label="Tên đăng nhập *"
              name="email"
              className="login__form--username-title" 
            >
              <Input  className= {classnames({
                                            "login__form--username-input":true,
                                            error: fail==="true" })} />
            </Form.Item>
            <Form.Item
              label="Mật khẩu *"
              name="password"
              className="login__form--password-title"
            >
              <Input.Password
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className= {classnames({
                  "login__form--password-input":true,
                  errorpassword: fail==="true" })} 
              />
            </Form.Item>
            {fail === "true" ? (
                <div className="login__form--fail">
                  <ExclamationCircleOutlined className="login__form--fail-icon "/>
                  <span className="login__form--fail-title ">Sai mật khẩu hoặc tên đăng nhập </span>
                </div>
              ):<div className="login__form--fail-hiden"></div>}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button  type="primary" htmlType="submit" disabled={loading} className="login__form--submit">
              {loading ? "Loading..." : "Sign In"}
             
              </Button>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="text" 
                      className="login__form--password-forgot" 
                      onClick={onClickForgotPassword}>
                      Quên mật khẩu? 
              </Button>
            </Form.Item>
        </Form>   
      </div>
  );
}
