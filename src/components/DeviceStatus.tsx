import { GoCpu } from "react-icons/go"

function DeviceStatus() {
    return (
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
    )
}

export default DeviceStatus
