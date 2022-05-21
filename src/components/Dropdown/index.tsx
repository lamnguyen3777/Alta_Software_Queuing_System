import React,{useState} from 'react';
import "./style.scss";

export interface IDropDownProps {
    width:string,
    title:string,
    initialLabel:{
        label:string,
        value:string
    },
    listMenu:{
        label:string,
        value:string
    }[],
    getValue:(value:number)=>void
}

export function DropDown (props: IDropDownProps) {
    const width = { width:`${props.width}`}
    const title = props.title;
    const listMenu = props.listMenu;
    const [itemShow,setItemShow]= useState(props.initialLabel);
    const itemClick=(index:number)=>{
        setItemShow(listMenu[index])
        props.getValue(index)
    }
    return (
        <div className='dropdown' style={width}>
            <div className='dropdown__header'>
                <span className='dropdown__header--title' >{title}</span>
            </div>
            <div className='dropdown__content'>
                <button className='dropdown__button ' style={width}>
                    <span className='dropdown__button--title' >{itemShow.label}</span>
                    <img 
                    src={require('../../configs/icons/dropdown.png')}
                    className = "dropdown__button--icon"
                    alt="Dropdown"/>
                </button>
                <div className='dropdown__list' style={width}>
                    <div className='dropdown__list--content' style={width}>
                    {
                        listMenu.map((item,index,listMenu)=>{
                            return(
                                <button className='dropdown__list--content-item' key={index}  onClick={()=>itemClick(index)}>
                                    <span className='dropdown__list--content-item-title'>{item.label}</span>
                                </button>
                            );}
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}
