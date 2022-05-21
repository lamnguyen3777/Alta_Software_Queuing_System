import * as React from 'react';
import { Form,Input} from 'antd';
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import { DropDown } from '../../../index';

export interface IUpdateAccountProps {
}

export function UpdateAccount (props: IUpdateAccountProps) {
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
    <div className='updateaccount'>
       <Form className='updateaccount__form'>
            <div className='updateaccount__container'>
                <span className='updateaccount__form--label'>Thông tin tài khoản</span>
                <div className='updateaccount__form--panel'>
                    <section className='updateaccount__form--panel-left'>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item-title">
                                <p>Họ và tên:</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nguyen Van A "} className="updateaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item-title">
                                <p>Số điện thoại :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"0855055435"} className="updateaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item-title">
                                <p>Email :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"NguyenVanA@gmail.com"} className="updateaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item-title">
                                <p>Vai trò :</p>
                                <span>*</span>
                            </div>
                            <DropDown width='560px' title={""} listMenu={accountDropdown} 
                            initialLabel={initialAccountChoose[0]} getValue={(value)=>getAccountDropdown(value)} />
                        </Form.Item>
                    </section>
                    <section className='updateaccount__form--panel-right'>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item-title">
                                <p>Tên đăng nhập :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"nguyenvana"} className="updateaccount__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item">
                                <div className="updateaccount__form--panel-item-title">
                                    <p>Mật khẩu:</p>
                                    <span>*</span>
                                </div>
                                <Input.Password
                                    placeholder={"nguyenvana123"}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="updateaccount__form--panel-item-password"
                                />
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item">
                                <div className="updateaccount__form--panel-item-title">
                                    <p>Nhập lại khẩu:</p>
                                    <span>*</span>
                                </div>
                                <Input.Password
                                    placeholder={"nguyenvana123"}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="updateaccount__form--panel-item-password"
                                />
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateaccount__form--panel-item-title">
                                <p>Tình trạng:</p>
                                <span>*</span>
                            </div>
                            <DropDown width='560px' title={""} listMenu={statusDropdown} initialLabel={statusDropdown[1]} getValue={(value)=>getStatusValueDropdown(value)} />
                        </Form.Item>
                    </section>
                </div>
                <div className='updateaccount__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='updateaccount__form--tool'>
                <button className='updateaccount__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='updateaccount__form--tool-add'>
                        <span>Cập nhật</span>
                </button>
            </div>
        </Form>
    </div>
  );
}
