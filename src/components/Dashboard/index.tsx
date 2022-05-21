import  React,{useState} from 'react';
import { ModelCard } from './ModelCards';
import DatePicker from 'sassy-datepicker';
import "./style.scss";
import { StaticCard } from './StaticCards';
import { Chart, LineAdvance} from 'bizcharts';
import { ModelCardCustom } from './ModelCardCustom';


export interface IDashboardProps {
}

export function Dashboard (props: IDashboardProps) {

  const [date, setDate] = useState(new Date());

  const onChange = (newDate:any) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };
  const data = [
    {
      day: "01",
      name: "",
      count: 0
    },
    {
      day: "02",
      name: "",
      count: 1000
    },
    {
      day: "03",
      name: "",
      count: 1100
    },
    {
      day: "04",
      name: "",
      count: 1200
    },
    {
      day: "05",
      name: "",
      count: 1300
    },
    {
      day: "06",
      name: "",
      count: 1400
    },
    {
      day: "07",
      name: "",
      count: 1450
    },
    {
      day: "08",
      name: "",
      count: 1500
    },
    {
      day: "09",
      name: "",
      count: 1600
    },
    {
      day: "10",
      name: "",
      count: 1700
    },
    {
      day: "11",
      name: "",
      count: 1900
    },
    {
      day: "12",
      name: "",
      count: 1700
    },
    {
      day: "13",
      name: "",
      count: 2200
    },
    {
      day: "14",
      name: "",
      count: 2500
    },
    {
      day: "15",
      name: "",
      count: 2700
    },
    {
      day: "16",
      name: "",
      count: 2900
    },
    {
      day: "17",
      name: "",
      count: 3200
    },
    {
      day: "18",
      name: "",
      count: 3600
    },
    {
      day: "19",
      name: "",
      count: 3100
    },
    {
      day: "20",
      name: "",
      count: 4300
    },
    {
      day: "21",
      name: "",
      count: 2800
    },
    {
      day: "22",
      name: "",
      count: 3000
    },
    {
      day: "23",
      name: "",
      count: 3400
    },
    {
      day: "24",
      name: "",
      count: 3900
    },
    {
      day: "25",
      name: "",
      count: 4300
    },{
      day: "26",
      name: "",
      count: 4250
    },{
      day: "27",
      name: "",
      count: 4200
    },
    {
      day: "28",
      name: "",
      count: 4100
    },
    {
      day: "29",
      name: "",
      count: 3200
    },
    {
      day: "30",
      name: "",
      count: 2200
    },
    {
      day: "31",
      name: "",
      count: 5200
    },
  ];

  
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__container--left'>
          <div className='dashboard__container--left-title'>
            <span >Biểu đồ cấp số</span>
          </div>
          <div className='dashboard__container--left-content'>
            <div className='dashboard__container--left-content-card'>
              <StaticCard href="/home/providenumber" title="Số thứ tự đã cấp" icon="sttdacap" count={4.221} static={32.41}/>
              <StaticCard href="/home/providenumber" title="Số thứ tự đã sử dụng" icon="sttdadung" count={3.721} static={-32.41}/>
              <StaticCard href="/home/providenumber" title="Số thứ tự đang chờ" icon="sttdangcho" count={468} static={56.41}/>
              <StaticCard href="/home/providenumber" title="Số thứ tự đã bỏ qua" icon="sttboqua" count={32} static={-22.41}/>
            </div>
            <div className='dashboard__container--left-content-chart'>
              <div className='dashboard__container--left-content-chart-header'>
                  <div className='dashboard__container--left-content-chart-header-title'>
                    <h1 className='dashboard__container--left-content-chart-header-title'>Bảng thống kê theo ngày</h1>
                    <span className='dashboard__container--left-content-chart-header-title'>Tháng 04/2022</span>
                  </div>
                  <span className='dashboard__container--left-content-chart-header-button-title'>Xem theo</span>   
              </div>
              <Chart padding={[10, 20, 50, 40]} autoFit height={373} width={738.73} data={data} className='dashboard__container--left-content-chart-content'>
                  <LineAdvance
                    shape="smooth"
                    point
                    area
                    position="day*count"
                    color=""
                  />
              </Chart>
              <span className='dashboard__container--left-content-chart-note1'>sl</span>
              <span className='dashboard__container--left-content-chart-note2'>/</span>
              <span className='dashboard__container--left-content-chart-note3'>ngày</span>
            </div>
          </div>
        </div>
        <div className='dashboard__container--right'>
          <div className='dashboard__container--right-title'>
            <span>Tổng quan</span>
          </div>
          <div className='dashboard__container--right-content'>
            <ModelCard percent={90} percentBigColor={"#FF7506"} percentSmallColor={"#7E7D88"}
                      icon={"device"} count={4.221} title={"Thiết bị"} mainColor={"#FF7506"}
                      iconColor={"invert(49%) sepia(80%) saturate(1563%) hue-rotate(352deg) brightness(98%) contrast(110%)"}
                       item1Count={3.799} item1Title={"Đang hoạt động"} item1Color={"#FFD130"} 
                       item2Count={422} item2Title={"Ngưng hoạt động"} item2Color={"#7E7D88"}/>
            <ModelCard percent={76} percentBigColor={"#4277FF"} percentSmallColor={"#7E7D88"}
                      icon={"service"} count={276} title={"Dịch vụ"} mainColor={"#4277FF"}
                      iconColor={"invert(48%) sepia(69%) saturate(4951%) hue-rotate(212deg) brightness(102%) contrast(102%)"}
                        item1Count={210} item1Title={"Đang hoạt động"} item1Color={"#4277FF"} 
                        item2Count={66} item2Title={"Ngưng hoạt động"} item2Color={"#7E7D88"}/>
            <ModelCardCustom percent={86} percent1={11.5} percentBigColor={"#35C75A"} percentSmallColor={"#7E7D88"}         
                            percentSmallestColor={"#F178B6"}
                            icon={"number"} count={4.221} title={"Cấp số"} mainColor={"#35C75A"}
                            iconColor={" invert(53%) sepia(89%) saturate(370%) hue-rotate(83deg) brightness(101%) contrast(92%)"}
                            item1Count={3.621} item1Title={"Đã sử dụng"} item1Color={"#35C75A"} 
                            item2Count={486} item2Title={"Đang chờ"} item2Color={"#7E7D88"}
                            item3Count={32} item3Title={"Bỏ qua"} item3Color={"#F178B6"}/>
            <DatePicker onChange={onChange} selected={date} />
          </div>
        </div>
      </div>
    </div>
  );
}




