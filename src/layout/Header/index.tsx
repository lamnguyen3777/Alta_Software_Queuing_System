import * as React from 'react';
import "./style.scss";
import {useNavigate,useLocation} from 'react-router-dom';
import classnames from 'classnames';
export interface IHeaderProps {
  title:string,
  children:string,
  children2:string,
  name:string,
  avatar:string,
}

export function Header (props: IHeaderProps) {
  const nav = useNavigate();
  const location = useLocation();
  const title = props.title;
  const children = props.children;
  const children2 = props.children2;
  const urlAvatar= props.avatar;
  const userName = props.name;

  const handleOnClick=()=>{
  
    nav("/home/userdetail");
  }
  const path = location.pathname.length;
  return (
    <header className = "header">
        <section className = "header__left">
            <span className={classnames({
                  "header__left--title":true,
                   deactive: (path  !== 15 )})}>{title}</span>
            <span className = "header__left--title-children">{children}</span>
            
          <span className = "header__left--title-children">{children2}</span>
        </section>
        <section className = "header__right">
            <button className = "header__right--noti">
              <img 
                  src={require('../../configs/icons/notification.png')}
                  className = "header__right--noti-img"
                  alt="Noti"/>
            </button>
            <button className = "header__right--account" onClick={handleOnClick}>
              <div className = "header__right--account-avatar">
                <img 
                    src={require('../../configs/images/avatar.png')}
                    className = "header__right--account-avatar-img"
                    alt="Noti"/>
              </div>
              <div className = "header__right--account-title">
                  <div className = "header__right--account-title-hello">
                      <p className = "header__right--account-title-hello" >Xin Chào</p>
                  </div>    
                  <div className = "header__right--account-title-name">
                     <p className = "header__right--account-title-name-user">{userName}</p>
                  </div>      
              </div>
            </button>
        </section>
    </header>
  );
}
