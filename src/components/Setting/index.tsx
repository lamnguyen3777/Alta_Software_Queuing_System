import * as React from 'react';
import "./style.scss";
import { Routes,Route, useLocation} from 'react-router-dom';
import { ListRole,AddRole,UpdateRole  } from './Role';
import { AddAccount, ListAccount, UpdateAccount } from './Account';
import { UserHistory } from './UserHistory';

export interface ISettingProps {
}

export function Setting (props: ISettingProps) {
    const location = useLocation();
    const titleList = [
      { path:"/home/setting/role",
        title:"Danh sách vai trò"
      },
      { path:"/home/setting/role/add",
        title:"Danh sách vai trò"
      },
      { path:"/home/setting/role/update",
        title:"Danh sách vai trò"
      },
      { path:"/home/setting/account",
        title:"Danh sách tài khoản"
      },
      { path:"/home/setting/account/add",
        title:"Quản lý tài khoản"
      },
      { path:"/home/setting/account/update",
        title:"Quản lý tài khoản"
      },
      { path:"/home/setting/userhistory",
        title:""
      },
    ]
    const index = titleList.findIndex(e => e.path === location.pathname)
    console.log(location.pathname)
  
    return (
      <div className='setting'>
        <div className='setting__container'>
          <div className='setting__header'>
            <span className='setting__header--title'>{titleList[index].title}</span>
          </div>
          <div className='setting__body'>
              <Routes>
                  <Route path='role'              element={<ListRole/>}             />
                  <Route path='role/add'          element={<AddRole/>}              />
                  <Route path='role/update'       element={<UpdateRole/>}           />
                  <Route path='account'           element={<ListAccount/>}          />
                  <Route path='account/add'       element={<AddAccount/>}           />
                  <Route path='account/update'    element={<UpdateAccount/>}        />
                  <Route path='userhistory'       element={<UserHistory/>}          />
              </Routes>
          </div>
        </div>
      </div>
    );
}
