import * as React from 'react';
import "./style.scss";
import {Link} from 'react-router-dom';

export interface IAddButtonProps {
    width:string,
    height:string,
    href:string,
    title:string,
    icon:string
}

export function AddButton (props: IAddButtonProps) {
    const style = {width:`${props.width}`,height:`${props.height}`}
    const href = props.href;
    const title = props.title;
  return (
    <div className='addbutton' style={style}>
        <Link to={`${href}`}  >
                <div className='addbutton__content'>
                    <img 
                        src={require(`../../configs/icons/${props.icon}.png`)}
                        className = "addbutton__content--icon"
                        alt="Add"/>
                    <span className = "addbutton__content--title" >{title}</span>
                </div>
            </Link>
    </div>
    
  );
}
