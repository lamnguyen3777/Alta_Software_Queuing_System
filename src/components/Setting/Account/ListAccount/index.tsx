import * as React from 'react';
import "./style.scss";
import { AddButton,SearchInput,DropDown } from '../../../index';

export interface IListAccountProps {
}

export function ListAccount (props: IListAccountProps) {
    const initialChoose = [
        { label:"Tất cả",
          value:"all"
        }
    ]
    const accountDropdown=[
        { label:"Kế toán",
          value:"accountant"
        },
        { label:"Quản lí",
          value:"manager"
        },
        { label:"Admin",
          value:"admin"
        },
      ]
      const getAccountDropdown=(value:number)=>{
        console.log(value)
    }
  return (
    <div className='listaccount__container'>
        <div className='listaccount__container--tool'>
            <DropDown width='300px' title={"Tên dịch vụ"} listMenu={accountDropdown} initialLabel={initialChoose[0]} 
            getValue={(value)=>getAccountDropdown(value)} />
            <SearchInput title="Từ khóa" width='300px' left='488px'/>
        </div>
        <div className='listaccount__container--content'>
            <div className='listaccount__container--content-left'>
                
            </div>
            <div className='listaccount__container--content-right'>
                <AddButton href='/home/setting/account/add' icon="add" title='Thêm tài khoản' width='80px' height='94px'/>
            </div>
        </div>
    </div>
  );
}
