import  React,{useState} from 'react';
import "./style.scss";


export interface IDatePickerProps {
  width:string,
  padding:string
}

export function DatePickerTool (props: IDatePickerProps) {

  const intialState = "10/10/2021";
  const [startDate,setStartDate]= useState(intialState);
  const [endDate,setEndDate]= useState(intialState);
  const style = { width:`${props.width}`,padding:`8px ${props.padding}`};


  return (
    <div className='datepicker' >
      <div className='datepicker__title'>
        <span>Chọn thời gian</span>
      </div>
      <div className='datepicker__content'>
        <div className='datepicker__content--left'>
          <button className='datepicker__panel' style={style}>
            <div className='datepicker__panel--icon'>
               <img 
               className='datepicker__panel--icon'
                src={require('../../configs/icons/calendar.png')}
                alt="Icon"/>
            </div>
            <div className='datepicker__panel--date'>
              <span>{startDate}</span>
            </div>
          </button>
        </div>
        <div className='datepicker__content--center'>
          <img 
                src={require('../../configs/icons/iconCenter.png')}
                className='datepicker__content--center-icon'
                alt="Icon"/>
        </div>
        <div className='datepicker__content--right'>
          <button className='datepicker__panel' style={style}>
              <div className='datepicker__panel--icon'>
                <img 
                className='datepicker__panel--icon'
                src={require('../../configs/icons/calendar.png')}
                alt="Icon"/>
              </div>
              <div className='datepicker__panel--date'>
                <span>{endDate}</span>
              </div>
          </button>
        </div>
      </div>
      <div className='datepicker__tool'>
      </div>
    </div>
  );
}
