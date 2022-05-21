import * as React from 'react';
import "./style.scss";
import PaginatedItems from 'react-paginate';
import { DatePickerTool,SearchInput } from '../../index';


export interface IUserHistoryProps {
}

export function UserHistory (props: IUserHistoryProps) {
  return (
    <div className='userhistory'>
      <div className='userhistory__container'>
        <div className='userhistory__tool'>
            <DatePickerTool width='150px' padding='12px'/>
            <SearchInput title="Từ khóa" width='240px' left='552px'/>
        </div>
        <div className='userhistory__content'>
          <div className='userhistory__content--table'>
          </div>
        </div>
        <div className='userhistory__footer'>
          <PaginatedItems pageCount={10} className="userhistory__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
      </div>
    </div>
  );
}
