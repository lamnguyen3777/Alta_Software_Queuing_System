import * as React from 'react';
import "./style.scss";
import { AddButton } from '../../ButtonAdd';

export interface IDetailDeviceProps {
}

export function DetailDevice (props: IDetailDeviceProps) {
  return (
    <div className='detaildevice'>
      <div className='detaildevice__container'>
        <div className='detaildevice__container--panel'>
            <div className='detaildevice__title'>
                <span>Thông tin thiết bị</span>
            </div>
            <div className='detaildevice__body'>
                <div className='detaildevice__body--left'>
                    <div className='detaildevice__body--item'>
                        <div className='detaildevice__body--item-title'>
                            <span>Mã thiết bị :</span>
                        </div>
                        <div className='detaildevice__body--item-content'>
                            <span>KIO 01</span>
                        </div>
                    </div>
                    <div className='detaildevice__body--item'>
                        <div className='detaildevice__body--item-title'>
                            <span>Tên thiết bị :</span>
                        </div>
                        <div className='detaildevice__body--item-content'>
                            <span>Kiosk</span>
                        </div>
                    </div>
                    <div className='detaildevice__body--item'>
                        <div className='detaildevice__body--item-title'>
                            <span>Địa chỉ IP :</span>
                        </div>
                        <div className='detaildevice__body--item-content'>
                            <span>128.172.308</span>
                        </div>
                    </div>
                </div>
                <div className='detaildevice__body--right'>
                    <div className='detaildevice__body--item'>
                        <div className='detaildevice__body--item-title'>
                            <span>Loại thiết bị :</span>
                        </div>
                        <div className='detaildevice__body--item-content'>
                            <span>Kiosk</span>
                        </div>
                    </div>
                    <div className='detaildevice__body--item'>
                        <div className='detaildevice__body--item-title'>
                            <span>Tên đăng nhập :</span>
                        </div>
                        <div className='detaildevice__body--item-content'>
                            <span>Linkkyo011</span>
                        </div>
                    </div>
                    <div className='detaildevice__body--item'>
                        <div className='detaildevice__body--item-title'>
                            <span>Mật khẩu :</span>
                        </div>
                        <div className='detaildevice__body--item-content'>
                            <span>CMS</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='detaildevice__bottom'>
                <div className='detaildevice__body--item-title'>
                    <span>Dịch vụ :</span>
                </div>
                <div className='detaildevice__body--item-content'>
                    <span>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
                </div>
            </div>
        </div>
        <div className='detaildevice__container--button'>
            <AddButton href='/home/device/update' width='80px' height='94px' title='Cập nhật thiết bị' icon='update'/>
        </div>
      </div>
    </div>
  );
}
