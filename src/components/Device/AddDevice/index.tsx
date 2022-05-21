import  React, { useState } from 'react';
import "./style.scss";
import { Form, Input} from "antd";
import { useNavigate } from 'react-router-dom';
import { DropDown } from '../../Dropdown';
import {db} from '../../../configs/firebase/config'
import { collection, addDoc } from "firebase/firestore";

export interface IAddDeviceProps {
}

export function AddDevice (props: IAddDeviceProps) {
    const nav= useNavigate()
    const userCollectionRef = collection(db, "device");
    const [data,setData]= useState<any | null>({
        code:"",
        name:"",
        useracc: "",
        ip: "",
        pass: "",
        service: "",
        type: "",
        active:true,
        connect:true,
    });
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
    const [service,setService]=useState(serviceList)
    const styleDeviceDropdown=[
        { label:"Chọn loại thiết bị",
          value:""
        },
        { label:"Kiosk",
          value:"Kiosk"
        },
        { label:"Display counter",
          value:"Display counter"
        }
    ]
    const getStyleValueDropdown=(index:number)=>{
        setData({...data,
            type:styleDeviceDropdown[index].value});
    }
    const handleDelete=(index:any)=>{
        const newServiceList = service;
        const newService = newServiceList.filter(function(el) { return el.value != `${index}`; })
        let serviceListString = "";
        newService.map((item,index,newService)=>{return serviceListString=serviceListString+", "+item.title})
        serviceListString=serviceListString.slice(2)
        setService(newService)
        setData({...data,service:serviceListString});
    }
    const handleCancelButtonClick=()=>{
        nav("/home/device")
    }
    const onFinish = (values: any) => {
        console.log('Success:', values);
        setData({...data,
                        code:values.code,
                        name:values.namedevice,
                        ip:values.ip,
                        useracc:values.accuser,
                        pass:values.pass});
    };
    const addDevice = async () => {
        await addDoc(userCollectionRef,data );
    };
    const handleSubmit = ()=>{
        if (
            data.code !== "" &&
            data.name !== "" &&
            data.accuser !== "" &&
            data.ip !== "" &&
            data.pass !== "" &&
            data.service !== "" &&
            data.type !== ""
          ) {
            addDevice();
            alert("Thêm thiết bị thành công");
            nav("/home/device");
          }
          else {
            return alert("Nhập đầy đủ thông tin");
          }
    }

   console.log("data nè ",data)
    
  return (
    <div className='adddevice'>
        <Form className='adddevice__form'  onFinish={onFinish}>
            <div className='adddevice__container'>
                <span className='adddevice__form--label'>Thông tin thiết bị</span>
                <div className='adddevice__form--panel'>
                    <section className='adddevice__form--panel-left'>
                        <Form.Item >
                            <div className="adddevice__form--panel-item-title">
                                <p>Mã thiết bị :</p>
                                <span>*</span>
                            </div>
                            <Form.Item name="code"   >
                            <Input   placeholder={"Nhập mã thiết bị"} className="adddevice__form--panel-item-input"/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item  >
                            <div className="adddevice__form--panel-item-title">
                                <p>Tên thiết bị :</p>
                                <span>*</span>
                            </div>
                            <Form.Item name="namedevice" >
                                <Input  placeholder={"Nhập tên thiết bị"} className="adddevice__form--panel-item-input"/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item  >
                            <div className="adddevice__form--panel-item-title">
                                <p>Địa chỉ IP :</p>
                                <span>*</span>
                            </div>
                            <Form.Item name="ip"    >
                                <Input  placeholder={"Nhập địa chỉ IP"} className="adddevice__form--panel-item-input"/>
                            </Form.Item>
                        </Form.Item>
                    </section>
                    <section className='adddevice__form--panel-right'>
                        <Form.Item className="adddevice__form--panel-item-dropdown" >
                            <div className="adddevice__form--panel-item-title">
                                <p>Loại thiết bị :</p>
                                <span>*</span>
                            </div>
                            <DropDown width='540px' title="" listMenu={styleDeviceDropdown} initialLabel={styleDeviceDropdown[0]} getValue={(value)=>getStyleValueDropdown(value)}/>
                        </Form.Item>
                        <Form.Item className="adddevice__form--panel-item-5"  >
                            <div className="adddevice__form--panel-item-title">
                                <p>Tên đăng nhập :</p>
                                <span>*</span>
                            </div>
                            <Form.Item name="accuser">
                                <Input  placeholder={"Nhập tên đăng nhập"} className="adddevice__form--panel-item-input"/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item >
                            <div className="adddevice__form--panel-item-title">
                                <p>Mật khẩu:</p>
                                <span>*</span>
                            </div>
                            <Form.Item name="pass"  >
                                <Input  placeholder={"Nhập mật khẩu"} className="adddevice__form--panel-item-input"/>
                            </Form.Item>
                        </Form.Item>
                    </section>
                </div >
                <div className='adddevice__form--service'>
                    <div className="adddevice__form--panel-item-title">
                                <p>Dịch vụ sử dụng:</p>
                                <span>*</span>
                    </div>
                    <div className="adddevice__form--service-content">
                        {
                            service.map((item,index,service)=>{
                                return(
                                    <div className="adddevice__form--service-content-item" key={item.value}>
                                        <span>{item.title}</span>
                                        <button onClick={()=>handleDelete(item.value)}>x</button>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
                <div className='adddevice__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='adddevice__form--tool'>
                <button className='adddevice__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='adddevice__form--tool-add'  onClick={handleSubmit}>
                        <span>Thêm thiết bị</span>
                </button>
            </div>
        </Form>
    </div>
  );
}
