import * as React from 'react';
import "./style.scss";
import { Routes,Route, useLocation} from 'react-router-dom';
import { ListDevice } from './ListDevice';
import { AddDevice } from './AddDevice';
import { DetailDevice } from './DetailDevice';
import { UpdateDevice } from './UpdateDevice';


export interface IDeviceProps {
}

export function Device (props: IDeviceProps) {
  const location = useLocation();
  const titleList = [
    { path:"/home/device",
      title:"Danh sách thiết bị"
    },
    { path:"/home/device/add",
      title:"Quản lý thiết bị"
    },
    { path:"/home/device/detail",
      title:"Quản lý thiết bị"
    },
    { path:"/home/device/update",
      title:"Quản lý thiết bị"
    },
  ]
  const index = titleList.findIndex(e => e.path === location.pathname)
  console.log(location.pathname)

  return (
    <div className='device'>
      <div className='device__container'>
        <div className='device__header'>
          <span className='device__header--title'>{titleList[index].title}</span>
        </div>
        <div className='device__body'>
            <Routes>
                <Route path=''                 element={<ListDevice/>}            />
                <Route path='add'              element={<AddDevice/>}             />
                <Route path='detail'           element={<DetailDevice/>}          />
                <Route path='update'           element={<UpdateDevice/>}          />
            </Routes>
        </div>
      </div>
    </div>
  );
}
