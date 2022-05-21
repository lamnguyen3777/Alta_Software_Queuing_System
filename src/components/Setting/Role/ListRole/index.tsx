import * as React from 'react';
import "./style.scss";
import { AddButton,SearchInput } from '../../../index';

export interface IListRoleProps {
}

export function ListRole (props: IListRoleProps) {
  return (
    <div className='listrole__container'>
        <div className='listrole__container--tool'>
            <SearchInput title="Từ khóa" width='240px' left='872px'/>
        </div>
        <div className='listrole__container--content'>
            <div className='listrole__container--content-left'>
                
            </div>
            <div className='listrole__container--content-right'>
                <AddButton href='/home/setting/role/add' icon="add" title='Thêm vai trò' width='80px' height='94px'/>
            </div>
        </div>
    </div>
  );
}
