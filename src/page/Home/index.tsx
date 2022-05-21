import React,{Children, useState} from 'react';
import { Header, MenuBar } from '../../layout';
import "./style.scss";
import urlImage from '../../configs/images/LoginWallpaper.png';
import { UserDetail,Dashboard, Device, Service, Report } from '../../components';
import { Routes,Route, useLocation} from 'react-router-dom';
import { ProvideNumber } from '../../components/ProvideNumber';
import { Setting } from '../../components/Setting';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {

    const location = useLocation();
    const dataMenu = [
        {   path : "/home",
            title: "", 
            children:"",
            children2:""
        },
        {   path : "/home/userdetail",
            title: "Thông tin cá nhân", 
            children:"",
            children2:""
        },
        {   path : "/home/dashboard",
            title: "Dashboard", 
            children:"",
            children2:""
        },
        {   path : "/home/device",
            title: "Thiết bị > ", 
            children:"Danh sách thiết bị",
            children2:""
        },
        {   path : "/home/device/add",
            title: "Thiết bị > ", 
            children:"Danh sách thiết bị > ",
            children2:" Thêm thiết bị"
        },
        {   path : "/home/device/detail",
            title: "Thiết bị > ", 
            children:"Danh sách thiết bị > ",
            children2:" Chi tiết thiết bị"
        },
        {   path : "/home/device/update",
            title: "Thiết bị > ", 
            children:"Danh sách thiết bị > ",
            children2:" Cập nhật thiết bị"
        },
        {   path : "/home/service",
            title: "Dịch vụ >", 
            children:"Danh sách dịch vụ",
            children2:""
        },
        {   path : "/home/service/add",
            title: "Dịch vụ >", 
            children:"Danh sách dịch vụ >",
            children2:"Thêm dịch vụ"
        },
        {   path : "/home/service/detail",
            title: "Dịch vụ >", 
            children:"Danh sách dịch vụ >",
            children2:"Chi tiết "
        },
        {   path : "/home/service/update",
            title: "Dịch vụ >", 
            children:"Danh sách dịch vụ >",
            children2:"Cập nhật"
        },
        {   path : "/home/providenumber",
            title: "Cấp số >",
            children:"Danh sách cấp số",
            children2:"" 
        },
        {   path : "/home/providenumber/add",
            title: "Cấp số >",
            children:"Danh sách cấp số > ",
            children2:"Cấp số mới" 
        },
        {   path : "/home/providenumber/detail",
            title: "Cấp số >",
            children:"Danh sách cấp số >",
            children2:"Chi tiết" 
        },
        {   path : "/home/report",
            title: "Báo cáo >", 
            children:"Lập báo cáo",
            children2:"" 
        }, 
        {   path : "/home/setting/role",
            title: "Cài đặt hệ thống >",
            children:"Quản lí vai trò",
            children2:"" 
        }, 
        {   path : "/home/setting/role/add",
            title: "Cài đặt hệ thống >",
            children:"Quản lí vai trò >",
            children2:" Thêm vai trò" 
        },
        {   path : "/home/setting/role/update",
            title: "Cài đặt hệ thống >",
            children:"Quản lí vai trò >",
            children2:" Cập nhật vai trò" 
        },
        {   path : "/home/setting/account",
            title: "Cài đặt hệ thống >",
            children:"Quản lí tài khoản " ,
            children2:"" 
        }, 
        {   path : "/home/setting/account/add",
            title: "Cài đặt hệ thống >",
            children:"Quản lí tài khoản >" ,
            children2:"Thêm tài khoản" 
        }, 
        {   path : "/home/setting/account/update",
            title: "Cài đặt hệ thống >",
            children:"Quản lí tài khoản >" ,
            children2:"Cập nhật tài khoản" 
        }, 
        {   path :"/home/setting/userhistory",
            title: "Cài đặt hệ thống  >",
            children:"Nhật kí người dùng", 
            children2:"" 
        }
    ]
    const index = dataMenu.findIndex(e => e.path === location.pathname)
  return (
    <div className="home__panel">
        <div className="home__container" >
            <div className="home__container--left" >
                <MenuBar/>
            </div>
            <div className="home__container--right" >
                <div className="home__container--right-header" >
                    <Header title={dataMenu[index].title} children={dataMenu[index].children} 
                                children2={dataMenu[index].children2} name="Nguyễn Nhật Lâm" avatar={urlImage}/>
                </div>   
                <div className="home__container--right-content" >
                    <Routes>
                        <Route path='userdetail'            element={<UserDetail/>}         />
                        <Route path='dashboard'             element={<Dashboard/>}          />
                        <Route path='device/*'              element={<Device/>}             />
                        <Route path='service/*'             element={<Service/>}            />
                        <Route path='providenumber/*'       element={<ProvideNumber/>}      />
                        <Route path='report/*'              element={<Report/>}             />
                        <Route path='setting/*'             element={<Setting/>}            />
                    </Routes>
                </div>  

            </div>
        </div>
    </div>
  );
}
