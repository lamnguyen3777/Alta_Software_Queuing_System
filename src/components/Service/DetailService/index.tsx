import * as React from 'react';
import "./style.scss";
import { Input } from 'antd';
import { AddButton } from '../../ButtonAdd';
import { DropDown } from '../../Dropdown';
import { DatePickerTool } from '../../DatePicker';
import { SearchInput } from '../../SearchInput';

export interface IDetailServiceProps {
}

export function DetailService (props: IDetailServiceProps) {
    const statusDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Đã hoàn thành",
          value:"haddone"
        },
        { label:"Đã thực hiện",
          value:"done"
        },
        { label:"Vắng",
          value:"off"
        }
      ]
      const getStatusValueDropdown=(value:number)=>{
        console.log(value)
      }
  return (
    <div className='detailservice'>
        <div className='detailservice__container'> 
            <section className='detailservice__container--left'>
                <div className='detailservice__container--left-content'>
                    <span className='detailservice__title'>
                        Thông tin dịch vụ
                    </span>
                    <div className='detailservice__item'>
                        <span>Mã dịch vụ:</span>
                        <p>201</p>
                    </div>
                    <div className='detailservice__item'>
                        <span>Tên dịch vụ:</span>
                        <p>Khám tim mạch</p>
                    </div>
                    <div className='detailservice__item'>
                        <span>Mô tả:</span>
                        <p>Chuyên các bệnh lý về tim</p>
                    </div>
                    <span className='detailservice__title'>
                        Quy tắc cấp số 
                    </span>
                    <div className='detailservice__syntaxservice'>
                        <p>Tăng tự động từ:</p>
                        <Input disabled={true}  placeholder={"0001"} className="detailservice__syntaxservice--input"/>
                        <span>đến</span>
                        <Input disabled={true}  placeholder={"9999"} className="detailservice__syntaxservice--input"/>
                    </div>
                    <div className='detailservice__syntaxservice'>
                        <p>Prefix:</p>
                        <Input disabled={true}  placeholder={"0001"} className="detailservice__syntaxservice--input"/>
                    </div>
                    <div className='detailservice__syntaxservice'>
                        <p>Reset mỗi ngày</p>
                    </div>
                    <div className='detailservice__syntaxservice--example'>
                        <p>Ví dụ: 201 - 2001</p>
                    </div>
                </div>
            </section>
            <section className='detailservice__container--center'>
                <div className='detailservice__container--center-content'>
                    <div className='detailservice__container--center-content-tool'>
                        <DropDown title='Trạng thái' width='160px' listMenu={statusDropdown} initialLabel={statusDropdown[0]} getValue={(value)=>getStatusValueDropdown(value)}/>
                        <div className='detailservice__container--center-content-tool-datepicker'>
                            <DatePickerTool width='130px' padding='4px'/>
                        </div>
                        <SearchInput width='206px' left='-28px' title='Từ khóa'/>
                    </div>
                </div>
            </section>
            <section className='detailservice__container--right'>
                <div className='detailservice__container--right-content'>
                    <AddButton href='/home/service/update' icon='update' title="Cập nhật danh sách" width='80px' height='94px'/>
                    <img 
                        src={require(`../../../configs/icons/line.png`)}
                        className = "detailservice__container--right-content-line"
                        alt="Line"/>
                    <AddButton href='/home/service' icon='back' title="Quay lại" width='80px' height='75px'/>
                </div>
            </section>
        </div>
    </div>
  );
}
