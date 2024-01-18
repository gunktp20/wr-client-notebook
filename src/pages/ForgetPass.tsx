import Wrapper from "../assets/wrappers/ForgetPass";
import { useState, useEffect, FunctionComponent } from "react";
import { FormRow } from "../components";

const ForgetPass: FunctionComponent = () => {

    interface IValue {
        firstname: string
        lastname: string
        email: string
        password: string
        confirm_password: string
        isMember: boolean
    }

    const initialState: IValue = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: '',
        isMember: false,
    };

    const [values, setValues] = useState(initialState);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    useEffect(() => {

    }, [])



    return (
            <Wrapper>
                <div className="form-main w-[400px] rounded-md">
                    <h3 className="text-left text-[27px] mt-1 font-bold mb-3 text-[#333]">
                        Forget Your Password ?
                    </h3>
                    <div className="text-[13px] text-gray-600">Please enter your E-mail address</div>


                    <FormRow
                        type="text"
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                        labelText="* Email"
                    />
                    <button className="transition-[0.2s] w-full bg-[#2cb1bc] hover:bg-[#208DA1] text-white h-[38px] rounded-md mt-5 shadow-md hover:shadow-lg">
                    Reset password
                    </button>
                </div>
            </Wrapper>
    );
}

export default ForgetPass;