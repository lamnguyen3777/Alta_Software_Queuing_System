import * as React from 'react';
import './style.scss'
import greendot from '../../../configs/icons/greendot.png';
import reddot from '../../../configs/icons/reddot.png';
import { Link} from 'react-router-dom';

export interface IServiceTableProps {
  data: any;
}

export function ServiceTable (props: IServiceTableProps) {
  const data = props.data.slice(0,9)
  return (
    <div className='servicetable'>
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th><span>Mã dịch vụ</span></th>
            <th><span>Tên dịch vụ</span></th>
            <th><span>Mô tả</span></th>
            <th><span>Trạng thái hoạt độn</span></th>
            <th></th>
            <th></th>
          </tr>
          {data.map((item: any, index: number) => 
            {
              return(
                <tr key={index}>
                <td><span>{item.code}</span></td>
                <td><span>{item.name}</span></td>
                <td className='servicetable__service'>
                  <p>{item.bio}</p>
                </td>
                <td >
                  <span>{item.active ? (<img srcSet={`${greendot} 2x`} alt=""/>) : (<img srcSet={`${reddot} 2x`} alt="" />)} 
                  {item.active ? "Hoạt động" : "Ngưng hoạt động"} </span>
                </td>
                <td>
                  <Link to="/service/detail"><span>Chi tiết</span></Link>
                </td>
                <td>
                  <Link to="/service/update"><span>Cập nhật</span></Link>
                </td>
              </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
