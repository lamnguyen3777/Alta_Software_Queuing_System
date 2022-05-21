import * as React from 'react';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import { } from '../../../index';
import { Form,Input,Checkbox} from 'antd';

export interface IUpdateRoleProps {
}

export function UpdateRole (props: IUpdateRoleProps) {
  const nav= useNavigate()
  const { TextArea } = Input;
  const handleCancelButtonClick=()=>{
    nav("/home/device")
  }
  const features = [
    {
      title:"Nhóm chức năng A",
      feature:
      [
        "Tất cả",
        "Chức năng X",
        "Chức năng Y",
        "Chức năng Z"
      ]
    },
    {
      title:"Nhóm chức năng B",
      feature:
      [
        "Tất cả",
        "Chức năng X",
        "Chức năng Y",
        "Chức năng Z"
      ]
    },
    {
      title:"Nhóm chức năng C",
      feature:
      [
        "Tất cả",
        "Chức năng X",
        "Chức năng Y",
        "Chức năng Z"
      ]
    },
    {
      title:"Nhóm chức năng D",
      feature:
      [
        "Tất cả",
        "Chức năng X",
        "Chức năng Y",
        "Chức năng Z"
      ]
    }
  ]
 
  return (
    <Form className='updaterole'>
      <div className='updaterole__container'>
          <div className='updaterole__container--title'>
            <span>Thông tin vai trò</span>
          </div>
          <div className='updaterole__container--content'>
              <div className='updaterole__container--content-left'>
                <Form.Item>
                  <div className="updaterole__container--content-left-item-title">
                      <p>Tên vai trò  :</p>
                      <span>*</span>
                  </div>
                  <Input  placeholder={"Kế toán"} className="updaterole__container--content-left-item-input"/>
                </Form.Item>
                <Form.Item>
                    <div className="updaterole__container--content-left-item-title">
                        <p>Mô tả :</p>
                    </div>
                    <TextArea   placeholder={"Chịu trách nhiệm thống kê và kiểm toán"} className="updaterole__container--content-left-item-input-2"/>
                </Form.Item>
                <div className='updaterole__container--content-left-note'>
                  <span>*</span>
                  <p>Là thông tin bắt buột</p>
                </div>
              </div>
              <div className='updaterole__container--content-right'>
                  <div className='updaterole__container--content-right-label'>
                    <p>Phân quyền chức năng</p>
                    <span>*</span>
                  </div>
                  <div className='updaterole__container--content-right-panel'>
                  {
                      features.map((item,index,features)=>{
                        return(
                          <div className='updaterole__feature'>
                            <div className='updaterole__feature--title'>
                              <span>{item.title}</span>
                            </div>
                            <div className='updaterole__feature--content'>
                              {
                                item.feature.map((child,index,feature)=>{
                                    return(
                                        <Form.Item  name="reseteveryday"  valuePropName="checked">
                                            <div className='updaterole__feature--content-checkbox'>
                                                <Checkbox className='updaterole__feature--content-checkbox-check'/>
                                                <div className='updaterole__feature--content-checkbox-content'>
                                                        <p>{child}</p>
                                                </div>
                                            </div>         
                                        </Form.Item>
                                    );
                                })
                              }
                            </div>
                          </div>
                        );
                      })
                  }
                  </div>
              </div>
          </div>
      </div>
      <div className='updaterole__tool'>
        <button  className='updaterole__tool--cancel'  onClick={handleCancelButtonClick}>
            <span>Hủy bỏ</span>
        </button>
        <button  className='updaterole__tool--add'>
            <span>Thêm</span>
        </button>
      </div>
    </Form>
  );
}
