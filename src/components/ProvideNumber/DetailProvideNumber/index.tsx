import React from 'react';
import "./style.scss";
import {AddButton  } from '../../../components';

export interface IDetailProvideNumberProps {
}

export function DetailProvideNumber (props: IDetailProvideNumberProps) {
  return (
    <div className='detailprovidenumber'>
        <div className='detailprovidenumber__panel'>
            <div className='detailprovidenumber__title'>
                <p>Thông tin cấp số</p>
            </div>
            <div className='detailprovidenumber__content'>
                <section className='detailprovidenumber__content--left'>
                    <div className='detailprovidenumber__content--item'>
                        <span>Họ tên: </span>
                        <p>Nguyễn Thị Dung</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Tên dịch vụ: </span>
                        <p>Khám tim mạch</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Số thứ tự: </span>
                        <p>2001201</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Thời gian cấp:</span>
                        <p>14:35 - 21/04/2022</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Hạn sử dụng: </span>
                        <p>18:00 - 21/04/2022</p>
                    </div>
                </section>
                <section className='detailprovidenumber__content--right'>
                    <div className='detailprovidenumber__content--item'>
                        <span>Nguồn cấp: </span>
                        <p>Kiosk</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Trạng thái: </span>
                        <div className='detailprovidenumber__content--item-icon'></div>
                        <p>Đang chờ</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Số điện thoại: </span>
                        <p>0948523623</p>
                    </div>
                    <div className='detailprovidenumber__content--item'>
                        <span>Địa chỉ Email: </span>
                        <p>nguyendung@gmail.com</p>
                    </div>
                </section>
            </div>
        </div>
        <div className='detailprovidenumber__tool'>
            <AddButton href={"/home/providenumber"} icon={"back"} title={"Quay lại"} width={"80px"} height={"75px"}/>
        </div>
    </div>
  );
}
