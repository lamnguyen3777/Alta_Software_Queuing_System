import * as React from 'react';
import './style.scss'
import greendot from '../../../configs/icons/greendot.png';
import reddot from '../../../configs/icons/reddot.png';
import { Link, useNavigate, useNavigationType} from 'react-router-dom';

export interface IDeviceTableProps {
  data: any;
}

export function DeviceTable (props: IDeviceTableProps) {
  const nav = useNavigate()
  const data = props.data.slice(0,9)
  return (
    <div className='devicetable'>
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th><span>Mã Thiết Bị</span></th>
            <th><span>Tên Thiết Bị</span></th>
            <th><span>Địa chỉ IP</span></th>
            <th><span>Trạng thái hoat động</span></th>
            <th><span>Trạng thái kết nối</span></th>
            <th><span>Dịch vụ sử dụng</span></th>
            <th></th>
            <th></th>
          </tr>
          {data.map((item: any, index: number) => 
            {
              return(
                <tr key={index}>
                <td><span>{item.code}</span></td>
                <td><span>{item.name}</span></td>
                <td><span> {item.ip}</span></td>
                <td >
                  <span>{item.active ? (<img srcSet={`${greendot} 2x`} alt=""/>) : (<img srcSet={`${reddot} 2x`} alt="" />)} 
                  {item.active ? "Hoạt động" : "Ngưng hoạt động"} </span>
                </td>
                <td >
                  <span>{item.connect ? (<img srcSet={`${greendot} 2x`} alt=""/>) : (<img srcSet={`${reddot} 2x`} alt="" />)} 
                  {item.connect ? "Kết nối" : "Mất kết nối"} </span> 
                </td>
                <td className='devicetable__service'>
                  <p>{item.service}</p>
                  <Link to="">Xem thêm</Link>
                </td>
                <td>
                  <Link to={"/home/device/detail"} ><span>Chi tiết</span></Link>
                </td>
                <td>
                  <Link to={"/home/device/update"}> <span>Cập nhật</span> </Link>
                </td>
              </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
