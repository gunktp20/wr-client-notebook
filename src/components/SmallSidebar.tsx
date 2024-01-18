import { FunctionComponent } from 'react'
import Wrapper from "../assets/wrappers/SmallSidebar"
import { RiMenu3Fill } from "react-icons/ri";
import { Logo } from '.';
import { Dispatch, SetStateAction } from "react";

interface IProps {
    setShowModal: Dispatch<SetStateAction<boolean | undefined>>;
}


const SmallSidebar: FunctionComponent<IProps> = (props: IProps) => {

    const { setShowModal } = props;
    
    const showModalActive = () => {
        setShowModal(true)
        const body = document.body;
        body.style.overflowY = "hidden";
    }

    return (
        <Wrapper className="justify-between items-center shadow-sm">
            <Logo width="35px" />
            <p>Dashboard</p>
            <div onClick={showModalActive} className='border border-[#00000038] rounded-md p-2 cursor-pointer hover:text-[#208da1] hover:border-[#208da1] transition-[0.3s]'>
                <RiMenu3Fill className="text-[20px]" />
            </div>
        </Wrapper>
    )
}

export default SmallSidebar
