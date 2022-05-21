import  React, { useState } from 'react';
import "./style.scss";
import { Form, Input} from "antd";
import { useNavigate } from 'react-router-dom';
import { DropDown } from '../../Dropdown';

export interface IUpdateDeviceProps {
}

export function UpdateDevice (props: IUpdateDeviceProps) {
    const nav= useNavigate()
    const serviceList=[
        {   title:"Khám tim mạch",
            value:"0"
        },
        {   title:"Khám sản phụ khoa",
            value:"1"
        },
        {   title:"Khám răng hàm mặt",
            value:"2"
        },
        {   title:"Khám tai mũi họng",
            value:"3"
        },
        {   title:"Khám hô hấp",
            value:"4"
        },
        {   title:"Khám tổng quát",
            value:"5"
        }   
    ]
    const [serviceState,setServiceState]=useState(serviceList)
    const handleDelete=(index:any)=>{
        const newServiceList = serviceState;
        const newService = newServiceList.filter(function(el) { return el.value != `${index}`; })
        setServiceState(newService);  
        console.log(serviceState)
    }
    const handleCancelButtonClick=()=>{
        nav("/home/device")
    }
    const styleDeviceDropdown=[
        { label:"Kiosk",
          value:"kiosk"
        },
        { label:"Display counter",
          value:"displaycounter"
        }
      ]
      const getStyleValueDropdown=(value:number)=>{
        console.log(value)
      }
  return (
    <div className='updatedevice'>
        <Form className='updatedevice__form'>
            <div className='updatedevice__container'>
                <span className='updatedevice__form--label'>Thông tin thiết bị</span>
                <div className='updatedevice__form--panel'>
                    <section className='updatedevice__form--panel-left'>
                        <Form.Item>
                            <div className="updatedevice__form--panel-item-title">
                                <p>Mã thiết bị :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"KIO_O1"} className="updatedevice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updatedevice__form--panel-item-title">
                                <p>Tên thiết bị :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Kiosk"} className="updatedevice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updatedevice__form--panel-item-title">
                                <p>Địa chỉ IP :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"128.172.3008"} className="updatedevice__form--panel-item-input"/>
                        </Form.Item>
                    </section>
                    <section className='updatedevice__form--panel-right'>
                        <Form.Item className="updatedevice__form--panel-item-dropdown">
                            <div className="updatedevice__form--panel-item-title">
                                <p>Loại thiết bị :</p>
                                <span>*</span>
                            </div>
                            {/* <Input  placeholder={"Kiosk"} className="updatedevice__form--panel-item-input"/> */}
                            <DropDown width='540px' title="" listMenu={styleDeviceDropdown} initialLabel={styleDeviceDropdown[0]} getValue={(value)=>getStyleValueDropdown(value)} />
                        </Form.Item>
                        <Form.Item className="updatedevice__form--panel-item-5">
                            <div className="updatedevice__form--panel-item-title">
                                <p>Tên đăng nhập :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Linhkyo011"} className="updatedevice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="updatedevice__form--panel-item-title">
                                <p>Mật khẩu:</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"CMS"} className="updatedevice__form--panel-item-input"/>
                        </Form.Item>
                    </section>
                </div >
                <div className='updatedevice__form--service'>
                    <div className="updatedevice__form--panel-item-title">
                                <p>Dịch vụ sử dụng:</p>
                                <span>*</span>
                    </div>
                    <div className="updatedevice__form--service-content">
                        {
                            serviceState.map((item,index,serviceState)=>{
                                return(
                                    <div className="updatedevice__form--service-content-item" key={item.value}>
                                        <span>{item.title}</span>
                                        <button onClick={()=>handleDelete(item.value)}>x</button>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
                <div className='updatedevice__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='updatedevice__form--tool'>
                <button className='updatedevice__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='updatedevice__form--tool-add'>
                        <span>Cập nhật</span>
                </button>
            </div>
        </Form>
    </div>
  );
}
