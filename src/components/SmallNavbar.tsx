import { FunctionComponent, SetStateAction, Dispatch } from 'react'
import { Logo } from '.'
import Wrapper from "../assets/wrappers/SmallNavbar"
import { RiMenu3Fill } from 'react-icons/ri'

interface IProps {
    setShowModal: Dispatch<SetStateAction<boolean | undefined>>;
}

const SmallNavbar: FunctionComponent<IProps> = (props: IProps) => {

    const { setShowModal } = props;

    const showModalActive = () => {
        setShowModal(true)
        const body = document.body;
        body.style.overflowY = "hidden";
    }

    return (
        <Wrapper className="w-[100%] fixed h-fit flex justify-center p-5 shadow-md">
            <div className="flex justify-between w-[100%]">
                <Logo width="35px" />
                <div onClick={showModalActive} className='border border-[#00000038] rounded-md p-2 cursor-pointer hover:text-[#208da1] hover:border-[#208da1] transition-[0.3s]'>
                    <RiMenu3Fill className="text-[20px]" />
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallNavbar