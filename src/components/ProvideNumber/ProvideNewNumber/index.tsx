import  React,{useState} from 'react';
import { DropDown } from '../../Dropdown';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

export interface IProvideNewNumberProps {
}

export function ProvideNewNumber (props: IProvideNewNumberProps) {
    const nav= useNavigate()
   
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() ;
    const date  = today.getDate()+"/"+(today.getMonth())+"/"+today.getFullYear();

    const initialLabel ={
        label:"Chọn dịch vụ",
        value:"null"
    }
    const serviceDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Khám sản - Phụ khoa",
          value:"connect"
        },
        { label:"Khám răng hàm mặt",
          value:"disconnect"
        },
        { label:"Khám tai mũi họng",
          value:"disconnect"
        }
      ]
    const [service,setService]=useState( initialLabel)
    const [active,setActive]=useState(false)

    const getServiceValueDropdown=(value:number)=>{
        if(value)
        setService(serviceDropdown[value]);
    }

    const handleCancelButtonClick=()=>{
        nav("/home/providenumber")
    }

    const getNumber=()=>{
        setActive(!active);
    }
  return (
    <div className='providenewnumber'>
        <div className='providenewnumber__content'>
            <div className='providenewnumber__title'>
                <span> Cấp số mới</span>
            </div>
            <div className='providenewnumber__label'>
                <span>Dịch vụ khách hàng lựa chọn</span>
            </div>
            <div className='providenewnumber__content'>
                <DropDown title='' listMenu={serviceDropdown}   width="400px" initialLabel={initialLabel}
                getValue={(value)=>getServiceValueDropdown(value)}/>
            </div>
            <div className='providenewnumber__tool'>
                <button className='providenewnumber__tool--cancel' onClick={handleCancelButtonClick}>
                            <span>Hủy bỏ</span>
                </button>
                <button className='providenewnumber__tool--add' onClick={getNumber} >
                        <span>In số</span>
                </button>
            </div>
        </div>
        <div className={classnames({
            'providenewnumber__panel' :true,
            active: active == true })}
            onClick={getNumber} >
            <div className='providenewnumber__popup'>
                <div className='providenewnumber__popup--title'>
                    <span>Số thứ tự được cấp </span>
                </div>
                <div className='providenewnumber__popup--number'>
                    <span>2001201 </span>
                </div>
                <div className='providenewnumber__popup--service'>
                    <div className='providenewnumber__popup--service-title'>
                        <span>DV:</span>
                    </div>
                    <p>{service.label}</p>
                    <span>{"(tại quầy số 1)" }</span>
                </div>
                <div className='providenewnumber__popup--time'>
                    <div className='providenewnumber__popup--time-provide'>
                        <div className='providenewnumber__popup--time-title'>
                            <span>Thời gian cấp:</span>
                        </div>
                        <div className='providenewnumber__popup--time-time'>
                            <span>{time}</span>
                        </div>
                        <div className='providenewnumber__popup--time-date'>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className='providenewnumber__popup--time-use'>
                        <div className='providenewnumber__popup--time-title'>
                            <span>Hạn sử dụng:</span>
                        </div>
                        <div className='providenewnumber__popup--time-time'>
                            <span>17:30</span>
                        </div>
                        <div className='providenewnumber__popup--time-date'>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

