import { FunctionComponent } from "react"
import Wrapper from "../assets/wrappers/LeftSidebar"

const LeftSidebar : FunctionComponent =()=> {
    return (
        <Wrapper className="pt-5 h-[100vh] pl-4 pr-4 shadow-lg flex flex-col gap-[10px] w-[240px] bg-white">
            <button className="menu-control text-left text-[14px] bg-[#208DA1] p-[10px] pl-5 rounded-lg text-[#fff]">
                Devices
            </button>
            <button className="menu-control text-left p-[10px] text-[14px] pl-5 rounded-lg">
                Dashboard
            </button>
            <button className="menu-control text-left p-[10px] text-[14px] pl-5 rounded-lg">
                Document
            </button>
        </Wrapper>
    )
}

export default LeftSidebar
