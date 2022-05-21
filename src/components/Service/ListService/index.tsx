import React,{useEffect,useState,useContext} from 'react';
import "./style.scss";
import { DropDown,SearchInput,AddButton, DatePickerTool } from '../../index';
import PaginatedItems from 'react-paginate';
import { ServiceTable } from '../DataTable';
import {db} from '../../../configs/firebase/config'
import { collection, getDocs } from "firebase/firestore";

export interface IListserviceProps {
}

export function Listservice (props: IListserviceProps) {
    const [valueStatus, setvalueStatus] = useState<any | null>();
    const [inputSearch, setInputSearch] = useState<any | "">("");
    const [dataTable,setDataTable] = useState<any>([])
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
    const filterData = (data: any) => {
      if (valueStatus === 1) {
        const result = data.filter(
          (data: any) => data.active === Boolean(valueStatus)
        );
        if (inputSearch !== "") {
          return result.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.bio.toLowerCase().indexOf(inputSearch) > -1
          );
        } else return result;
      } else if (valueStatus === 0) {
        let result = data.filter(
          (data: any) => data.active === Boolean(valueStatus)
        );
        if (inputSearch)
          return result.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.bio.toLowerCase().indexOf(inputSearch) > -1
          );
        else return result;
      } else if (inputSearch) {
        return data.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.bio.toLowerCase().indexOf(inputSearch) > -1
        );
      } else return data;
    };
    const getStatusValueDropdown=(index:number)=>{
      setvalueStatus(Number(statusDropdown[index].value))
    }
    const getInputValue = (input: any) => {
      setInputSearch(input);
    };
    useEffect(() => {
      const getUser = async () => {
        const UserColecctionRef = collection(db, "service");
        const data = await getDocs(UserColecctionRef);
        setDataTable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUser();
    }, []);
    
  return (
    <div className='listservice'>
         <div className='listservice__tool'>
          <DropDown width='300px' title={"Trạng thái hoạt động"} listMenu={statusDropdown} initialLabel={statusDropdown[0]}
          getValue={(value)=>getStatusValueDropdown(value)} />
          <DatePickerTool width='150px' padding='12px'/>
          <SearchInput width='300px' left='168px' title={"Từ khóa"} onGetValue={getInputValue}/>
        </div>
        <div className='listservice__content'>
          <div className='listservice__content--table'>
            <ServiceTable  data={filterData(filterData(dataTable))}/>
          </div>
          <div className='listservice__content--button'>
            <AddButton href='/home/service/add' title={"Thêm dịch vụ"} height='94px' width='80px' icon="add"/>
          </div>
        </div>
        <div className='listservice__footer'>
          <PaginatedItems pageCount={10} className="listservice__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
    </div>
  );
}
