import * as React from 'react';
import "./style.scss";
import { useLocation} from 'react-router-dom';
import { AddButton,TableData  } from '../index';
import PaginatedItems from 'react-paginate';
import { DatePickerTool } from '../DatePicker';


export interface IReportProps {
}

export function Report (props: IReportProps) {
  const location = useLocation();
  const titleList = [
    { path:"/home/report",
      title:""
    },
  ]
  const index = titleList.findIndex(e => e.path === location.pathname)
  console.log(location.pathname)


  return (
    <div className='report'>
      <div className='report__container'>
        <div className='report__header'>
          <span className='report__header--title'>{titleList[index].title}</span>
        </div>
        <div className='report__tool'>
          <DatePickerTool width='150px' padding='12px'/>
        </div>
        <div className='report__content'>
          <div className='report__content--table'>
          </div>
          <div className='report__content--button'>
            <AddButton href='/home/report/download' title={"Tải về"} height='75px' width='80px' icon="download"/>
          </div>
        </div>
        <div className='report__footer'>
          <PaginatedItems pageCount={10} className="report__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
      </div>
    </div>
  );
}
