import * as React from 'react';
import "./style.scss";
export interface ISearchInputProps {
    width:string,
    left:string,
    title:string,
    onGetValue?: any;
}

export function SearchInput (props: ISearchInputProps) {
    const style = { width:`${props.width}`,"margin-left":`${props.left}`};
    const width = { width:`${props.width}`};
    const title = props.title;
    const getValue = (e: any) => {
      props.onGetValue(e);
    };
  return (
    <div className='searchinput'  style={style} >
        <div className='searchinput__title' > {title}</div>
        <div className='searchinput__content'   >
            <input className='searchinput__content--input' onChange={(event) => getValue(event.target.value)}  style={width} type="text" placeholder='Nhập từ khóa' />
            <img 
                    src={require('../../configs/icons/search.png')}
                    className = "searchinput__content--icon"
                    alt="Search"/>
        </div>
    </div>
  );
}
