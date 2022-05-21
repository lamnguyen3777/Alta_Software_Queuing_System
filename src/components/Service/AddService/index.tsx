import { Form,Input,Checkbox  } from 'antd';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";

export interface IAddServiceProps {
}

export function AddService (props: IAddServiceProps) {
    const nav= useNavigate()
    const handleCancelButtonClick=()=>{
        nav("/home/service")
    }
    const { TextArea } = Input;
  return (
    <div className='addservice'>
       <Form className='addservice__form'>
            <div className='addservice__container'>
                <span className='addservice__form--label'>Thông tin dịch vụ</span>
                <div className='addservice__form--panel'>
                    <section className='addservice__form--panel-left'>
                        <Form.Item>
                            <div className="addservice__form--panel-item-title">
                                <p>Mã dịch vụ:</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"201"} className="addservice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="addservice__form--panel-item-title">
                                <p>Tên dịch vụ :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Khám tim mạch"} className="addservice__form--panel-item-input"/>
                        </Form.Item>
                    </section>
                    <section className='addservice__form--panel-right'>
                        <Form.Item>
                            <div className="addservice__form--panel-item-title">
                                <p>Mô tả :</p>
                            </div>
                            <TextArea   placeholder={"Mô tả dịch vụ"} className="addservice__form--panel-item-input-2"/>
                        </Form.Item>
                    </section>
                </div>
                <div className='addservice__form--service'>
                    <span className='addservice__form--service-label'>Quy tắc cấp số</span>
                    <Form.Item
                    name="auto"
                    valuePropName="checked">
                        <div className='addservice__form--service-checkbox'>
                            <Checkbox className='addservice__form--service-checkbox-check'/>
                            <div className='addservice__form--service-checkbox-content'>
                                <p>Tăng tự động từ:</p>
                                <Input  placeholder={"0001"} className="addservice__form--service-checkbox-content-input"/>
                                <span>đến</span>
                                <Input  placeholder={"9999"} className="addservice__form--service-checkbox-content-input"/>
                            </div> 
                        </div>
                    </Form.Item>
                    <Form.Item
                    name="prefix"
                    valuePropName="checked">
                        <div className='addservice__form--service-checkbox'>
                            <Checkbox className='addservice__form--service-checkbox-check'/>
                            <div className='addservice__form--service-checkbox-content'>
                                <p>Prefix:</p>
                                <Input  placeholder={"0001"} className="addservice__form--service-checkbox-content-input"/>
                            </div>  
                        </div>
                    </Form.Item>
                    <Form.Item
                    name="surfix"
                    valuePropName="checked">
                        <div className='addservice__form--service-checkbox'>
                            <Checkbox className='addservice__form--service-checkbox-check'/>
                            <div className='addservice__form--service-checkbox-content'>
                                <p>Surfix:</p>
                                <Input  placeholder={"0001"} className="addservice__form--service-checkbox-content-input"/>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item
                    name="reseteveryday"
                    valuePropName="checked"
                    >
                        <div className='addservice__form--service-checkbox'>
                            <Checkbox className='addservice__form--service-checkbox-check'/>
                            <div className='addservice__form--service-checkbox-content'>
                                    <p>Reset mỗi ngày:</p>
                            </div>
                        </div>
                        
                    </Form.Item>
                </div>
                <div className='addservice__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='addservice__form--tool'>
                <button className='addservice__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='addservice__form--tool-add'>
                        <span>Thêm dịch vụ</span>
                </button>
            </div>
        </Form>
    </div>
  );
}
