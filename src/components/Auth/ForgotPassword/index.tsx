import * as React from 'react';
import './style.scss';
import {  Form, Input, Button} from 'antd';

export interface IForgotPasswordProps {
  onClickCancleForgotPassword:()=>void
  onClickCountinueForgotPassword:()=>void
}

export function ForgotPassword (props: IForgotPasswordProps) {
  const onClickCancleForgotPassword=props.onClickCancleForgotPassword;
  const onClickCountinueForgotPassword=props.onClickCountinueForgotPassword;
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
          className="login__form"
        >
            <h1 className="login__form--title ">Đặt lại mật khẩu </h1>
            <Form.Item
              label="Vui lòng nhập mail để đặt lại mật khẩu của bạn *"
              name="email"
              className="login__form--email-title" 
            >
              <Input className="login__form--email-input" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="login__form--tool">
              <Button type="primary" htmlType="submit" 
                      className="login__form--tool-cancel"
                      onClick={onClickCancleForgotPassword}
               >
                Huỷ
              </Button>
              <Button type="primary" htmlType="submit" 
                      className="login__form--tool-submit"
                      onClick={onClickCountinueForgotPassword}
              >
                Tiếp tục
              </Button>
            </Form.Item>
        </Form>
    </div>
  );
}
