import * as React from 'react';
import { DropDown,SearchInput ,AddButton ,DatePickerTool,TableData } from '../../index';
import PaginatedItems from 'react-paginate';
import "./style.scss";
export interface IListProvideNumberProps {
}

export function ListProvideNumber (props: IListProvideNumberProps) {
    const statusDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Đang chờ",
          value:"waiting"
        },
        { label:"Đang sử dụng",
          value:"using"
        },
        { label:"Bỏ qua",
          value:"skip"
        }
      ]
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
      const sourceDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Kiosk",
          value:"kiosk"
        },
        { label:"Hệ thống",
          value:"system"
        },
      ]
      const getServiceValueDropdown=(value:number)=>{
          console.log(value)
      }
      const getStatusValueDropdown=(value:number)=>{
        console.log(value)
      }
      const getSourceValueDropdown=(value:number)=>{
        console.log(value)
      }
  return (
    <div className='listprovidenumber'>
           <div className='listprovidenumber__tool'>
          <DropDown width='154px' title={"Tên dịch vụ"} listMenu={serviceDropdown} initialLabel={serviceDropdown[0]} 
          getValue={(value)=>getServiceValueDropdown(value)} />
          <DropDown width='154px' title={"Tình trạng"} listMenu={statusDropdown} initialLabel={statusDropdown[0]}
          getValue={(value)=>getStatusValueDropdown(value)} />
          <DropDown width='154px' title={"Nguồn cấp"} listMenu={sourceDropdown} initialLabel={sourceDropdown[0]}
          getValue={(value)=>getSourceValueDropdown(value)}/>
          <DatePickerTool width='147px' padding='12px'/>
          <SearchInput width='240px' left='18px' title={"Từ khóa"}/>
        </div>
        <div className='listprovidenumber__content'>
          <div className='listprovidenumber__content--table'>
            <TableData/>
          </div>
          <div className='listprovidenumber__content--button'>
            <AddButton href='/home/providenumber/add' title={"Cấp số mới"} height='94px' width='80px' icon="add"/>
          </div>
        </div>
        <div className='listprovidenumber__footer'>
          <PaginatedItems pageCount={10} className="listprovidenumber__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
    </div>
  );
}
