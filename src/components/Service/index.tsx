import * as React from 'react';
import "./style.scss";
import { Routes,Route, useLocation} from 'react-router-dom';
import { Listservice } from './ListService';
import { AddService } from './AddService';
import { DetailService } from './DetailService';
import { UpdateService } from './UpdateService';


export interface IserviceProps {
}

export function Service (props: IserviceProps) {
  const location = useLocation();
  const titleList = [
    { path:"/home/service",
      title:"Danh sách dịch vụ"
    },
    { path:"/home/service/add",
      title:"Quản lý dịch vụ"
    },
    { path:"/home/service/detail",
      title:"Quản lý dịch vụ"
    },
    { path:"/home/service/update",
      title:"Quản lý dịch vụ"
    },
  ]
  const index = titleList.findIndex(e => e.path === location.pathname)
  console.log(location.pathname)

  return (
    <div className='service'>
      <div className='service__container'>
        <div className='service__header'>
          <span className='service__header--title'>{titleList[index].title}</span>
        </div>
        <div className='service__body'>
            <Routes>
                <Route path=''                 element={<Listservice/>}            />
                <Route path='add'              element={<AddService/>}             />
                <Route path='detail'           element={<DetailService/>}          />
                <Route path='update'           element={<UpdateService/>}          />
            </Routes>
        </div>
      </div>
    </div>
  );
}
