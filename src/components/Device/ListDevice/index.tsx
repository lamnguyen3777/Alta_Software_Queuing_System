import React,{useState,useEffect} from 'react';
import "./style.scss";
import { DropDown,SearchInput ,AddButton, } from '../../../components';
import PaginatedItems from 'react-paginate';
import {db} from '../../../configs/firebase/config'
import { collection, getDocs } from "firebase/firestore";
import { DeviceTable } from '../DataTable';
export interface IListDeviceProps {
}

export function ListDevice (props: IListDeviceProps) {
    const [valueStatus, setvalueStatus] = useState<any | null>();
    const [valueConnect, setvalueConnect] = useState<any | null>();
    const [inputSearch, setInputSearch] = useState<any | "">("");
    const statusDropdown=[
        { label:"Tất cả",
          value:"-1"
        },
        { label:"Hoạt động",
          value:"1"
        },
        { label:"Ngưng hoạt động",
          value:"0"
        }
      ]
      const connectDropdown=[
        { label:"Tất cả",
          value:"-1"
        },
        { label:"Kết nối",
          value:"1"
        },
        { label:"Mất kết nối",
          value:"0"
        }
      ]
   
    const [dataTable,setDataTable] = useState<any>([])
    useEffect(() => {
      const getUser = async () => {
        const UserColecctionRef = collection(db, "device");
        const data = await getDocs(UserColecctionRef);
        setDataTable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUser();
    }, []);
    const filterData = (datas: any) => {
      if (valueStatus === 1) {
        let result = datas.filter(
          (data: any) => data.active === Boolean(valueStatus)
        );
        if (valueConnect === 1) {
          return result.filter(
            (data: any) => data.connect === Boolean(valueConnect)
          );
        } else if (valueConnect === 0) {
          return result.filter(
            (data: any) => data.connect === Boolean(valueConnect)
          );
        } else if (inputSearch !== "") {
          return result.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
              item.service.toLowerCase().indexOf(inputSearch) > -1
          );
        }
  
        return result;
      } else if (valueStatus === 0) {
        let result = datas.filter(
          (data: any) => data.active === Boolean(valueStatus)
        );
        
  
        if (valueConnect === 1) {
          return result.filter(
            (data: any) => data.connect === Boolean(valueConnect)
          );
        } else if (valueConnect === 0) {
          return result.filter(
            (data: any) => data.connect === Boolean(valueConnect)
          );
        } else if (inputSearch !== "") {
          return result.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
              item.service.toLowerCase().indexOf(inputSearch) > -1
          );
        }
        console.log("test",result);
        return result;
        
      } else {
        if (valueConnect === 0) {
          let result = datas.filter(
            (item: any) => item.connect === Boolean(valueConnect)
          );
          console.log(result);
          if (inputSearch)
            return result.filter(
              (item: any) =>
                item.code.toLowerCase().indexOf(inputSearch) > -1 ||
                item.name.toLowerCase().indexOf(inputSearch) > -1 ||
                item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
                item.service.toLowerCase().indexOf(inputSearch) > -1
            );
          else return result;
        } else if (valueConnect === 1) {
          let result = datas.filter(
            (item: any) => item.connect === Boolean(valueConnect)
          );
          if (inputSearch)
            return result.filter(
              (item: any) =>
                item.code.toLowerCase().indexOf(inputSearch) > -1 ||
                item.name.toLowerCase().indexOf(inputSearch) > -1 ||
                item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
                item.service.toLowerCase().indexOf(inputSearch) > -1
            );
          else return result;
        } else if (inputSearch) {
          return datas.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
              item.service.toLowerCase().indexOf(inputSearch) > -1
          );
        }
      }
      return datas;
    };
    const getStatusValueDropdown=(index:number)=>{
      setvalueStatus(Number(statusDropdown[index].value))
    }
    const getConnectValueDropdown=(index:number)=>{
      setvalueConnect(Number(connectDropdown[index].value) )
    }
    const getInputValue = (input: any) => {
      setInputSearch(input);
    };
  
  return (
    <div className='devicelist'>
          <div className='devicelist__tool'>
            <DropDown width='300px' title={"Trạng thái hoạt động"} listMenu={statusDropdown} initialLabel={statusDropdown[0]} getValue={(value)=>getStatusValueDropdown(value)}/>
            <DropDown width='300px' title={"Trạng thái kết nối"} listMenu={connectDropdown}  initialLabel={connectDropdown[0]}getValue={(value)=>getConnectValueDropdown(value)}/>
            <SearchInput width='300px' left='164px' title={"Từ khóa"} onGetValue={getInputValue}/>
          </div>
          <div className='devicelist__content'>
            <div className='devicelist__content--table'>
              <DeviceTable data = {filterData(dataTable)}/>
            </div>
            <div className='devicelist__content--button'>
              <AddButton href='/home/device/add' title={"Thêm thiết bị"} height='94px' width='80px' icon="add"/>
            </div>
          </div>
          <div className='devicelist__footer'>
            <PaginatedItems pageCount={10} className="devicelist__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
          </div>
    </div>
  );
}
