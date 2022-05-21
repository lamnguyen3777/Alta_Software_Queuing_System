import { Form,Input,Checkbox  } from 'antd';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";

export interface IUpdateServiceProps {
}

export function UpdateService (props: IUpdateServiceProps) {
    const nav= useNavigate()
    const handleCancelButtonClick=()=>{
        nav("/home/service")
    }
    const { TextArea } = Input;
  return (
    <div className='updateservice'>
       <Form className='updateservice__form'>
            <div className='updateservice__container'>
                <span className='updateservice__form--label'>Thông tin dịch vụ</span>
                <div className='updateservice__form--panel'>
                    <section className='updateservice__form--panel-left'>
                        <Form.Item>
                            <div className="updateservice__form--panel-item-title">
                                <p>Mã dịch vụ:</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"201"} className="updateservice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updateservice__form--panel-item-title">
                                <p>Tên dịch vụ :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Khám tim mạch"} className="updateservice__form--panel-item-input"/>
                        </Form.Item>
                    </section>
                    <section className='updateservice__form--panel-right'>
                        <Form.Item>
                            <div className="updateservice__form--panel-item-title">
                                <p>Mô tả :</p>
                            </div>
                            <TextArea   placeholder={"Mô tả dịch vụ"} className="updateservice__form--panel-item-input-2"/>
                        </Form.Item>
                    </section>
                </div>
                <div className='updateservice__form--service'>
                    <span className='updateservice__form--service-label'>Quy tắc cấp số</span>
                    <Form.Item
                    name="auto"
                    valuePropName="checked">
                        <div className='updateservice__form--service-checkbox'>
                            <Checkbox className='updateservice__form--service-checkbox-check'/>
                            <div className='updateservice__form--service-checkbox-content'>
                                <p>Tăng tự động từ:</p>
                                <Input  placeholder={"0001"} className="updateservice__form--service-checkbox-content-input"/>
                                <span>đến</span>
                                <Input  placeholder={"9999"} className="updateservice__form--service-checkbox-content-input"/>
                            </div> 
                        </div>
                    </Form.Item>
                    <Form.Item
                    name="prefix"
                    valuePropName="checked">
                        <div className='updateservice__form--service-checkbox'>
                            <Checkbox className='updateservice__form--service-checkbox-check'/>
                            <div className='updateservice__form--service-checkbox-content'>
                                <p>Prefix:</p>
                                <Input  placeholder={"0001"} className="updateservice__form--service-checkbox-content-input"/>
                            </div>  
                        </div>
                    </Form.Item>
                    <Form.Item
                    name="surfix"
                    valuePropName="checked">
                        <div className='updateservice__form--service-checkbox'>
                            <Checkbox className='updateservice__form--service-checkbox-check'/>
                            <div className='updateservice__form--service-checkbox-content'>
                                <p>Surfix:</p>
                                <Input  placeholder={"0001"} className="updateservice__form--service-checkbox-content-input"/>
                            </div>
                        </div>
                        
                    </Form.Item>
                    <Form.Item
                    name="reseteveryday"
                    valuePropName="checked"
                    >
                        <div className='updateservice__form--service-checkbox'>
                            <Checkbox className='updateservice__form--service-checkbox-check'/>
                            <div className='updateservice__form--service-checkbox-content'>
                                    <p>Reset mỗi ngày:</p>
                            </div>
                        </div>
                        
                    </Form.Item>
                </div>
                <div className='updateservice__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='updateservice__form--tool'>
                <button className='updateservice__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='updateservice__form--tool-add'>
                        <span>Cập nhật</span>
                </button>
            </div>
        </Form>
    </div>
  );
}
