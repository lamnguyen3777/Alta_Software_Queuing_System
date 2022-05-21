import React,{ useState} from 'react';
import {  Form, Input, Button} from 'antd';
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import classnames from 'classnames';
import './style.scss';

export interface IResetPasswordProps {
}

export function ResetPassword (props: IResetPasswordProps) {
  const [fail, setFail] = useState ('');

  const onFinish = (values: any) => {
    console.log(values);
    const {password,confirmpassword}=values;
    password !== confirmpassword ? setFail("true" ):setFail("fail" );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="resetpassword__form"
        >
            <h1 className="resetpassword__form--title">Đặt lại mật khẩu mới</h1>
            <Form.Item
              label="Mật khẩu"
              name="password"
              className="resetpassword__form--password-title" 
            >
               <Input.Password
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className={classnames({
                  "resetpassword__form--password-input"  :true,
                  errorreset: fail==="true" })}
              />
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu"
              name="confirmpassword"
              className="resetpassword__form--confirmpassword-title" 
            >
               <Input.Password
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className={classnames({
                  "resetpassword__form--confirmpassword-input" :true,
                  errorreset: fail==="true" })}
              />
            </Form.Item>
            {fail === "true" ?(
                                <div className="resetpassword__form--fail">
                                  <ExclamationCircleOutlined className="resetpassword__form--fail-icon "/>
                                  <span className="resetpassword__form--fail-title ">Mật khẩu không trùng khớp</span>
                                </div>)
                              : <div className="resetpassword__form--fail-hiden"></div>}
                                  
            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="resetpassword__form--tool">
              <Button type="primary" htmlType="submit" className="resetpassword__form--tool-submit">
                Xác nhận
              </Button>
            </Form.Item>
        </Form>
      
    </div>
  );
}
