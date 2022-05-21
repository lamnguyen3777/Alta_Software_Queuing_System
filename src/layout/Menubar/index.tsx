import { Button,Menu } from 'antd';
import React,{useState} from 'react';
import "./style.scss";
import classnames from 'classnames';
import { useLocation,Link } from 'react-router-dom';

export interface IMenuBarProps {
}

export function MenuBar (props: IMenuBarProps) {
  const location = useLocation();
  const dataMenu = [
    {   path : "/home/dashboard",
        title: "Dashboard", 
        icon : "dashboard.png"
    },
    {   path : "/home/device",
        title: "Thiết bị", 
        icon : "device.png"
    },
    {   path : "/home/service",
        title: "Dịch vụ", 
        icon : "service.png"
    },
    {   path : "/home/providenumber",
        title: "Cấp số", 
        icon : "number.png"
    },
    {   path : "/home/report",
        title: "Báo cáo", 
        icon : "report.png"
    }
]
const path = location.pathname.slice(0, 13);
  return (
    <div className="menubar">
        <div className="menubar__header">
        <img 
              src={require('../../configs/images/LogoAlta.png')}
              className="menubar__header--logo"
              alt="Logo"/>
        </div>
        <div className="menubar__content">
            {dataMenu.map((item,index,dataMenu)=>{
                    return(
                            <Link to={item.path}  key={index} className={classnames({
                                            "menubar__content--button":true,
                                            active: location.pathname === `${item.path}` })} >
                                  <img className="menubar__content--button-img"
                                      src={require(`../../configs/icons/${item.icon}`)} alt="dashboard"/>
                                  <span>{item.title}</span>
                            </Link>
                          );}
                    )
            }
            <div className="menubar__content--button-dropdown" >
              <Button className={classnames({
                          "menubar__content--button":true,
                          active: path  === "/home/setting" })} >
                <img className="menubar__content--button-img1"
                      src={require('../../configs/icons/setting.png')} alt="setting"/>
                Cài đặt hệ thống
                <img className="menubar__content--button-drop "
                      src={require('../../configs/icons/drop.png')} alt="drop"/>
              </Button> 
              <div className="menubar__content--button-dropdown-list">
                <Link to={"/home/setting/role"} 
                      className="menubar__content--button-dropdown-list-item-top">
                      Quản lí vai trò
                </Link>
                <Link to={"/home/setting/account"} 
                      className="menubar__content--button-dropdown-list-item-center">
                      Quản lí tài khoản
                </Link>
                <Link to={"/home/setting/userhistory"} 
                      className="menubar__content--button-dropdown-list-item-bottom">
                      Nhật kí người dùng
                </Link>
              </div>
            </div>
            
           
        </div>
        <div className="menubar__footer">
            <Button className="menubar__content--button">
                <img className="menubar__content--button-img"
                      src={require('../../configs/icons/lognout.png')} alt="lognout"/>
                Đăng xuất
            </Button> 
        </div>
    </div>
  );
}
