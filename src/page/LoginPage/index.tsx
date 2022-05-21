import React,{useState} from 'react';
import "./style.scss";
import {Login,ForgotPassword,ResetPassword,Loading} from '../../components';
import { useNavigate, Link } from 'react-router-dom';
import {Home} from "../index";
export interface ILoginPageProps {
}

export function LoginPage (props: ILoginPageProps) {
  const [forgot,setForgot]= useState("false");
  const [success,setSuccess]= useState('false');
  const nav = useNavigate();
  const onClickForgotPassword=()=>{
      setForgot("true");
  }
  const onClickCancleForgotPassword=()=>{
      setForgot("false");
  }
  const onClickCountinueForgotPassword=()=>{
      setForgot("next");
  }
  const successLogin=()=>{
    return nav("/home");
  }
  return (
        <div className="loginpage__panel">
            <div className="loginpage__container" >
                <section className="loginpage__container--left"  >
                <img 
                src={require('../../configs/images/LogoAlta.png')}
                className="loginpage__container--left-logo"
                alt="Logo"/>
                {forgot==="false"?<Login successLogin={successLogin} onClickForgotPassword={ onClickForgotPassword}/>:""}
                {forgot==="true"? <ForgotPassword  onClickCancleForgotPassword={onClickCancleForgotPassword} 
                                                onClickCountinueForgotPassword={onClickCountinueForgotPassword}/>:""}
                {forgot==="next"?<ResetPassword/>:""}
                </section>
                <section className="loginpage__container--right" >
                {forgot==="false"?(
                    <div className="loginpage__container--right-login">
                        <img 
                        src={require('../../configs/images/LoginWallpaper.png')}
                        className="loginpage__container--right-img"
                        alt="Wallpaper"/>
                        <p className="loginpage__container--right-title-small" >Hệ thống</p>
                        <p className="loginpage__container--right-title-large" >QUẢN LÝ XẾP HÀNG</p>
                    </div>
                ):(
                    <div className="loginpage__container--right-forgotpassword">
                    <img 
                        src={require('../../configs/images/ForgotPassword.png')}
                        className="loginpage__container--right-img2"
                        alt="Wallpaper"/>
                    </div> 
                )}              
                </section>
            </div>
        </div>
  );
}
