import React from 'react';
import './style.scss';
import { Spin } from 'antd';

export  const Loading =()=> {
  return(
    <div className="loader__wrapper">
      <div className="loader__custom">
      </div>
    </div>
  );
}
