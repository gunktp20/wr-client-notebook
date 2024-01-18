import Wrapper from '../assets/wrappers/Dashboard'
import { GoCpu } from "react-icons/go";
import { useState } from 'react';
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiWifiOffLine } from "react-icons/ri";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js"

import { Doughnut } from 'react-chartjs-2';
import BigSidebar from '../components/BigSidebar';
import SmallSidebar from '../components/SmallSidebar';
import { DashboardMenuModal } from '../components';

import RangeSlider from '../components/widgets/RangeSlider';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function Dashboard() {

    const [showModal, setShowModal] = useState<boolean | undefined>(false)

    const data = {
        labels: [],
        datasets: [{
            label: 'Poll',
            data: [3, 24],
            backgroundColor: ['#00000045', '#208da1'],
            borderColor: ['#fff', '#fff'],
            circumference: 180,
            rotation: 270,
            borderWidth: 0,
            cutout: "85.6%",
        }]
    }

    const options = {

    }


    return (
        <Wrapper>
            {showModal && <DashboardMenuModal setShowModal={setShowModal} />}
            <BigSidebar />
            <SmallSidebar setShowModal={setShowModal} />
            {/* <div className="flex flex-col w-[100%] bg-red-500">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[2rem] p-[2.5rem]">
                    <div className="w-[100%] device-status border-solid border-t-[4px] border-[#15499e] h-fit p-3 pl-5 bg-[#fff] shadow-md">
                        <div className='mb-2'>จำนวนอุปกรณ์</div>
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="text-[30px] text-[#15499e]">2</div>
                                <div><GoCpu className="text-[25px] text-[#15499e]" /></div>
                            </div>
                            <div className="text-[13px]">SN: อุปกรณ์0001 - 2024-01-07 12:57:46</div>
                        </div>
                    </div>
                    <div className="w-[100%] device-status border-solid border-t-[4px] border-[#06af04] h-fit p-3 pl-5 bg-[#fff] shadow-md">
                        <div className='mb-2'>อุปกรณ์ที่ออนไลน์</div>
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="text-[30px] text-[#06af04]">0</div>
                                <div><HiOutlineStatusOnline className="text-[#06af04] text-[25px]" /></div>
                            </div>
                            <div className="text-[13px]">SN: อุปกรณ์0001 - 2024-01-07 12:57:46</div>
                        </div>
                    </div>
                    <div className="w-[100%] device-status border-solid border-t-[4px] border-[#f93553] h-fit p-3 pl-5 bg-[#fff] shadow-md">
                        <div className='mb-2'>อุปกรณ์ที่ออฟไลน์</div>
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="text-[30px] text-[#f93553]">2</div>
                                <div><RiWifiOffLine className="text-[25px] text-[#f93553]" /></div>
                            </div>
                            <div className="text-[13px]">SN: อุปกรณ์0001 - 2024-01-07 12:57:46</div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='dashboard-section w-[100%] h-[100%]'>
                <div className="device-overview">
                    <div className='top-bar bg-[#fff] w-[100%] fixed p-5 text-[#fff]'>
                        <input ></input>
                    </div>
                    <div className="devices-container">
                        <div className="rounded-lg w-[100%] device-status border-solid border-t-[4px] border-[#15499e] h-fit p-3 pl-5 bg-[#fff] shadow-md ">
                            <div className='mb-2'>จำนวนอุปกรณ์</div>
                            <div>
                                <div className="flex justify-between items-center mb-5">
                                    <div className="text-[30px] text-[#15499e]">2</div>
                                    <div><GoCpu className="text-[25px] text-[#15499e]" /></div>
                                </div>
                                <div className="text-[13px]">SN: อุปกรณ์0001 - 2024-01-07 12:57:46</div>
                            </div>
                        </div>
                        <div className="rounded-lg w-[100%] device-status border-solid border-t-[4px] border-[#06af04] h-fit p-3 pl-5 bg-[#fff] shadow-md">
                            <div className='mb-2'>อุปกรณ์ที่ออนไลน์</div>
                            <div>
                                <div className="flex justify-between items-center mb-5">
                                    <div className="text-[30px] text-[#06af04]">0</div>
                                    <div><HiOutlineStatusOnline className="text-[#06af04] text-[25px]" /></div>
                                </div>
                                <div className="text-[13px]">SN: อุปกรณ์0001 - 2024-01-07 12:57:46</div>
                            </div>
                        </div>
                        <div className="rounded-lg w-[100%] device-status border-solid border-t-[4px] border-[#f93553] h-fit p-3 pl-5 bg-[#fff] shadow-md">
                            <div className='mb-2'>อุปกรณ์ที่ออฟไลน์</div>
                            <div>
                                <div className="flex justify-between items-center mb-5">
                                    <div className="text-[30px] text-[#f93553]">2</div>
                                    <div><RiWifiOffLine className="text-[25px] text-[#f93553]" /></div>
                                </div>
                                <div className="text-[13px]">SN: อุปกรณ์0001 - 2024-01-07 12:57:46</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-container">
                    {/* Start */}
                    <div className="pt-16 pb-7 widgets-container rounded-lg w-[100%]">
                        <div className='text-[#0A3D5D] absolute z-[1] font-bold text-[20px] top-1 left-0'> Temperature</div>

                        <div className="bg-white h-100 items-center p-5 rounded-md shadow-lg widget">
                            <div className='category-widget'>
                                ควบคุมความหรี่ DSPS8266
                            </div>
                               <div className="mt-5 mb-5 w-[100%] flex justify-center">
                                    <RangeSlider id="1"/>
                               </div>
                        </div>
                        <div className="bg-white h-100 items-center p-5 rounded-md shadow-lg widget">
                            <div className='category-widget'>
                                ควบคุมความหรี่ DSPS8266
                            </div>
                               <div className="mt-5 mb-5 w-[100%] flex justify-center">
                                    <RangeSlider id="2"/>
                               </div>
                        </div>

                        <div className="bg-white h-100 items-center p-5 rounded-md shadow-lg widget">
                            <div className='category-widget'>
                                ควบคุมความหรี่ DSPS8266
                            </div>
                               <div className="mt-5 mb-5 w-[100%] flex justify-center">
                                    <RangeSlider id="3"/>
                               </div>
                        </div>

                       
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className=" pb-7 widgets-container rounded-lg w-[100%]">
                        <div className='text-[#0A3D5D] absolute z-[1] font-bold text-[20px] top-1 left-0'></div>
                        
                        <div className="bg-white h-fit p-5 rounded-md shadow-lg widget">
                            <div className='category-widget'>
                                อุณหภูมิ DSPS8266
                            </div>
                            <div className='absolute top-[6rem]'>57</div>
                            <div className='gauge-widget'>
                                <Doughnut data={data} options={options}>

                                </Doughnut>
                            </div>
                        </div>

                        
                        <div className="bg-white h-fit p-5 rounded-md shadow-lg widget">
                            <div className='category-widget'>
                                อุณหภูมิ DSPS8266
                            </div>
                            <div className='absolute top-[6rem]'>80</div>
                            <div className='gauge-widget'>
                                <Doughnut data={data} options={options}>

                                </Doughnut>
                            </div>
                        </div>


                    </div>
                    {/* End */}

                

                </div>

            </div>


            {/* <div className="dashboard-container">
                <div className="flex ml-[3rem] w-fit bg-white p-5 shadow-lg">
                    <div className="p-5" style={{ width: '180px' }}>
                        <Doughnut data={data} options={options}>

                        </Doughnut>
                    </div>
                </div>
            </div> */}
        </Wrapper>
    )
}

export default Dashboard 