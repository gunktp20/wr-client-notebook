import { FunctionComponent } from 'react'
import Wrapper from "../assets/wrappers/BigSidebar"

const BigSidebar : FunctionComponent = () => {
  return (
    <Wrapper className='big-sidebar pt-5 fixed h-[100vh] pl-4 pr-4 flex flex-col gap-[10px] w-[240px] bg-white static'>
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

export default BigSidebar
