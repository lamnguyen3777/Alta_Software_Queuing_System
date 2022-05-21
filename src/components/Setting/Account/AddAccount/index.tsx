import * as React from 'react';
import { Form,Input} from 'antd';
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import { DropDown } from '../../../index';

export interface IAddAccountProps {
}

export function AddAccount (props: IAddAccountProps) {
    const nav= useNavigate()
    const handleCancelButtonClick=()=>{
        nav("/home/setting/account")
    }
    const initialAccountChoose = [
        { label:"Chọn vai trò",
          value:"none"
        }
    ]
    const accountDropdown=[
        { label:"Kế toán",
          value:"accountant"
        },
        { label:"Quản lí",
          value:"manager"
        },
        { label:"Admin",
          value:"admin"
        },
      ]
    const getAccountDropdown=(value:number)=>{
        console.log(value)
    }
    const statusDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Hoạt động",
          value:"active"
        },
        { label:"Ngưng hoạt động",
          value:"deactive"
        }
      ]
      const getStatusValueDropdown=(value:number)=>{
        console.log(value)
      }
  return (
    <div className='addaccount'>
       <Form className='addaccount__form'>
            <div className='addaccount__container'>
                <span className='addaccount__form--label'>Thông tin tài khoản</span>
                <div className='addaccount__form--panel'>
                    <section className='addaccount__form--panel-left'>
                        <Form.Item>
                            <div className="addaccount__form--panel-item-title">
                                <p>Họ và tên:</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập họ tên"} className="addaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="addaccount__form--panel-item-title">
                                <p>Số điện thoại :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập số điện thoại"} className="addaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="addaccount__form--panel-item-title">
                                <p>Email :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập email"} className="addaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="addaccount__form--panel-item-title">
                                <p>Vai trò :</p>
                                <span>*</span>
                            </div>
                            <DropDown width='560px' title={""} listMenu={accountDropdown} 
                            initialLabel={initialAccountChoose[0]} getValue={(value)=>getAccountDropdown(value)} />
                        </Form.Item>
                    </section>
                    <section className='addaccount__form--panel-right'>
                        <Form.Item>
                            <div className="addaccount__form--panel-item-title">
                                <p>Tên đăng nhập :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập tên đăng nhập"} className="addaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="addaccount__form--panel-item">
                                <div className="addaccount__form--panel-item-title">
                                    <p>Mật khẩu:</p>
                                    <span>*</span>
                                </div>
                                <Input.Password
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="addaccount__form--panel-item-password"
                                />
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className="addaccount__form--panel-item">
                                <div className="addaccount__form--panel-item-title">
                                    <p>Nhập lại khẩu:</p>
                                    <span>*</span>
                                </div>
                                <Input.Password
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="addaccount__form--panel-item-password"
                                />
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className="addaccount__form--panel-item-title">
                                <p>Tình trạng:</p>
                                <span>*</span>
                            </div>
                            <DropDown width='560px' title={""} listMenu={statusDropdown} initialLabel={statusDropdown[1]} getValue={(value)=>getStatusValueDropdown(value)} />
                        </Form.Item>
                    </section>
                </div>
                <div className='addaccount__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='addaccount__form--tool'>
                <button className='addaccount__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='addaccount__form--tool-add'>
                        <span>Thêm</span>
                </button>
            </div>
        </Form>
    </div>
  );
}
