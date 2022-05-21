import * as React from 'react';
import "./style.scss";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface IModelCardProps {
  percent:number,
  percentBigColor:string,
  percentSmallColor:string,

  icon:string,
  iconColor:string,

  count:number,
  title:string,
  mainColor:string,

  item1Count:number,
  item1Title:string,
  item1Color:string,

  item2Count:number,
  item2Title:string,
  item2Color:string,
  
}

export function ModelCard (props: IModelCardProps) {
  const percent = props.percent;
  const  percentBigColor = props.percentBigColor;
  const percentSmallColor= props.percentSmallColor;

  const icon = props.icon;
  const iconColor = {filter : `${props.iconColor}` }; 

  const count= props.count;
  const title= props.title;
  const  mainColor= {color : `${props.mainColor}` };

  const item1Count= props.item1Count;
  const item1Title= props.item1Title;
  const item1Color= {color : `${props.item1Color}`};
         
  const item2Count= props.item2Count;
  const item2Title= props.item2Title;
  const item2Color= {color : `${props.item2Color}`};
  
  return (
    <div className='modelcard'>
      <div className='modelcard__left'>
        <div className='modelcard__left--chart'>
          <CircularProgressbar className='modelcard__left--chart-big' 
                                value={percent} text={`${percent}%`} 
                                strokeWidth={5}
                                styles={{path:{stroke:`${percentBigColor}`},
                                        trail:{stroke:'#EAEAEC'},
                                        text:{stroke:"#535261",fontFamily: 'Nunito',fontSize:'18px',lineHeight:'24px',fontWeight:'700',fontStyle:'normal'}}} />
          <CircularProgressbar className='modelcard__left--chart-small' 
                                value={100-percent}  
                                strokeWidth={5}
                                styles={buildStyles({pathColor: `${percentSmallColor}`,trailColor: '#EAEAEC'})} />
        </div>
        <div className='modelcard__left--content'>
            <div className='modelcard__left--content-count'>
              <span>{count}</span>
            </div>
            <div className='modelcard__left--content-title'>
                <div className='modelcard__left--content-title-icon'>
                  <img src={require(`../../../configs/icons/${icon}.png`)}
                  className='modelcard__left--content-title-icon'
                  style={iconColor}
                    alt="Icon"/>
                </div>
                <div className='modelcard__left--content-title-name'style={mainColor} >
                  <span>{title}</span>
                </div>
            </div>
        </div>
      </div>
      <div className='modelcard__right'>
          <div className='modelcard__right--content'>
            <div className='modelcard__right--content-icon' style={item1Color}>
              <span>.</span>
            </div>
            <div className='modelcard__right--content-title'>
              <span>{item1Title}</span>
            </div>
            <div className='modelcard__right--content-count' style={mainColor}>
              <span>{item1Count}</span>
            </div>
          </div>
          <div className='modelcard__right--content'>
            <div className='modelcard__right--content-icon' style={item2Color}>
              <span>.</span>
            </div>
            <div className='modelcard__right--content-title'>
              <span>{item2Title}</span>
            </div>
            <div className='modelcard__right--content-count' style={mainColor}>
              <span>{item2Count}</span>
            </div>
          </div>
          
      </div>
    </div>
  );
}
