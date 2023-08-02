import React from 'react'
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa';
import { Progress } from 'antd';
import PieChartComp from './PieChartComp'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import image from '../download.png';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
function Main() {
  return (
    <>
        <div className='pt-[25px] px-[25px]  '>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#5a5c69] text-[25px] leading-[14px] font-bold cursor-pointer'>Dashboard</h1>
                <button className='bg-[#2e27bc] h-[32px] flex items-center justify-center rounded-[3px] cursor-pointer p-[20px] text-white'>Generate Report</button>
            </div>
            <div className='grid grid-cols-4 gap-[10px] mt-[25px] pb-[15px]'>
            <div className='h-[100px] rounded-[8px] bg-[#f1eded] border-l-[4px] border-[#4e5cbc] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[10px] transition duration-300 ease'>
                <div>
                    <h2 className='text-[#855d5d] text-[11px] font-bold'>EARNING (MONTHLY)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a3d3d] mt-[5px]'>$4,00,000</h1>
                </div>
                <FaRegCalendarMinus size={28}/>
            </div>
            <div className='h-[100px] rounded-[8px] bg-[#f1eded] border-l-[4px] border-[#1c6d2a] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[10px] transition duration-300 ease'>
                <div>
                    <h2 className='text-[#1c6d2a] text-[11px] font-bold'>EARNING (ANNUAL)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a3d3d] mt-[5px]'>$4,00,000</h1>
                </div>
                <FaRegCalendarMinus size={28}/>
            </div>
            <div className='h-[100px] rounded-[8px] bg-[#f1eded] border-l-[4px] border-[#0de030] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[10px] transition duration-300 ease'>
                <div>
                    <h2 className='text-[#0de030] text-[11px] font-bold'>EARNING (MONTHLY)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a3d3d] mt-[5px]'>$4,00,000</h1>
                </div>
                <FaRegCalendarMinus size={28}/>
            </div>
            <div className='h-[100px] rounded-[8px] bg-[#f1eded] border-l-[4px] border-[#f2ea07] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[10px] transition duration-300 ease'>
                <div>
                    <h2 className='text-[#f2ea07] text-[11px] font-bold'>PENDING REQUEST</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a3d3d] mt-[5px]'>$4,00,000</h1>
                </div>
                <FaRegCalendarMinus size={28}/>
            </div>

            </div>
            <div className='flex  gap-[30px]'>
            <div className='basis-[70%] bg-white shadow-md cursor-pointer rounded-[4px]'>
            <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                <h2>Earning Overview</h2>
                <FaEllipsisV color='grey' />
            </div>
            <div>
            <LineChart
            style={{marginTop:'20px'}}
            width={850}
            height={350}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
            </div>
            </div>
            <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-center py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                    <h2>Revenue Resources</h2>
                    <FaEllipsisV color='grey' className='cursor-ponter'/>
                </div>
                <div>
                <PieChartComp/>
            </div>
            </div>
            
            </div>
            <div className='flex mt-[20px] w-full gap-[30px]'>
                <div className='basis-[55%] border bg-white shadow-lg cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px]
                     border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[20px] font-bold'>Projects Overview</h2>
                        <FaEllipsisV color='grey'/>
                    </div>
                    <div className='px-[25px] space-y-[15px]'>
                    <div>
                    <h2>Server Migration</h2>
                <Progress percent={30} />
                </div>
                <div>
                <h2>Customer database</h2>
                <Progress percent={50} status="active" />
                </div>
                <div>
                <h2>Payment Details</h2>
                <Progress percent={70} status="exception" />
                </div>
                <div>
                <h2>Account Setup</h2>
                <Progress percent={100} />
                </div>
                <div>
                <Progress percent={50} showInfo={false} />
                </div>
                    </div>
                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[20px] font-bold'>Resources</h2>
                        <FaEllipsisV color='grey' />
                    </div>
                    <div className='pl-[35px] flex  items-center justify-center h-[100%]'>
                        <div>
                            <img src={image} alt=''/>
                            <p className='mt-[15px] text-semibold text-gray-500 items-center justify-center px-12'>No data available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Main

  
//   export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
//     render() {
//       return (
//         <ResponsiveContainer width="100%" height="100%">
          
//         </ResponsiveContainer>
//       );
//     }
//   }