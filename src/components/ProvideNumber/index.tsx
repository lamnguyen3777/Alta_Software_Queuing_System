import * as React from 'react';
import "./style.scss";
import {Routes,Route, useLocation} from 'react-router-dom';
import { ListProvideNumber } from './ListProvideNumber';
import { ProvideNewNumber } from './ProvideNewNumber';
import { DetailProvideNumber } from './DetailProvideNumber';


export interface IProvideNumberProps {
}

export function ProvideNumber (props: IProvideNumberProps) {
  const location = useLocation();
  const titleList = [
    { path:"/home/providenumber",
      title:"Quản lý cấp số"
    },
    { path:"/home/providenumber/add",
      title:"Quản lý cấp số"
    },
    { path:"/home/providenumber/detail",
      title:"Quản lý cấp số"
    },
  ]
  const index = titleList.findIndex(e => e.path === location.pathname)
  console.log(location.pathname)

 
  return (
    <div className='providenumber'>
      <div className='providenumber__container'>
        <div className='providenumber__header'>
          <span className='providenumber__header--title'>{titleList[index].title}</span>
        </div>
        <div className='providenumber__body'>
            <Routes>
                <Route path=''                 element={<ListProvideNumber/>}            />
                <Route path='add'              element={<ProvideNewNumber/>}             />
                <Route path='detail'           element={<DetailProvideNumber/>}          />
                {/* <Route path='update'           element={<UpdateDevice/>}          /> */}
            </Routes>
        </div>
     
      </div>
    </div>
  );
}
