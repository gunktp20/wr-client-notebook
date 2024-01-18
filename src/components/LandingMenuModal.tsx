import { FunctionComponent } from 'react'
import Wrapper from "../assets/wrappers/DashboardMenuModal"
import { Logo } from '.'
import { GoCpu } from "react-icons/go";
import { TfiDashboard } from "react-icons/tfi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    setShowModal: Dispatch<SetStateAction<boolean | undefined>>;
}

const LandingMenuModal: FunctionComponent<IProps> = (props: IProps) => {
    const { setShowModal } = props;

    const closeShowModal = () =>{
        setShowModal(false)
        const body = document.body;
        body.style.overflowY = "";
    }

    return (
        <Wrapper>
            <div className="bg-[#fff] w-[100%] h-[100%] p-5 rounded-lg flex flex-col items-center relative">
                <div onClick={closeShowModal} className='absolute top-[0.4rem] right-[0.8rem] font-bold text-[20px] cursor-pointer'>X</div>
                <div className='flex gap-[1rem] items-center m-5'>
                    <Logo width='40px' />
                    <p className='text-[#2cb1bc] text-[25px] font-bold'>Warering</p>
                </div>
                <div>
                    <div className='flex items-center gap-5 mt-[2rem] text-[#000000af] hover:text-[#2cb1bc] cursor-pointer transition-[0.3s]'>
                        Home
                    </div>
                    <div className='flex gap-5 mt-[2rem] text-[#333] text-[#000000af] cursor-pointer transition-[0.3s]'>
                        Ecosystem
                    </div>
                    <Link to="/dashboard" className='flex gap-5 items-center mt-[2rem] text-[#000000af] hover:text-[#2cb1bc] cursor-pointer transition-[0.3s]'>
                        Dashboard
                    </Link>
                    <Link to="/register" className='font-bold text-[17px] flex gap-5 items-center mt-[2rem] text-[#000000af] hover:text-[#2cb1bc] cursor-pointer transition-[0.3s]'>
                        SignIn
                    </Link>
                    <Link to="/login" className='font-bold text-[17px] flex gap-5 items-center mt-[2rem] text-[#000000af] hover:text-[#2cb1bc] cursor-pointer transition-[0.3s]'>
                        SignUp
                    </Link>

                </div>
            </div>
        </Wrapper>
    )
}

export default LandingMenuModal
