import Wrapper from "../assets/wrappers/Login";
import { useState, useEffect, FunctionComponent } from "react";
import { FormRow } from "../components";

const Login: FunctionComponent = () => {

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

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    useEffect(() => {

    }, [])


    const { isMember } = values

    return (
            <Wrapper>
                <div className="form-main w-[400px] rounded-md">
                    <h3 className="text-left text-[27px] mt-1 font-bold mb-3 text-[#333]">
                        {values.isMember ? "Sign In" : "Sign Up"}
                    </h3>
                    {/* <div className="text-[13px] text-gray-600">{values.isMember ? "กรอกข้อมูลของคุณเพื่อเข้าสู่ระบบ" : "กรอกข้อมูลของคุณเพื่อสมัครสมาชิก"}</div> */}


                    {!isMember &&
                        <FormRow
                            type="text"
                            name="firstname"
                            value={values.firstname}
                            handleChange={handleChange}
                        />
                    }
                    {!isMember &&
                        <FormRow
                            type="text"
                            name="lastname"
                            value={values.lastname}
                            handleChange={handleChange}
                        />
                    }
                    <FormRow
                        type="text"
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                    />
                    <FormRow type="password"
                        name="password"
                        value={values.password}
                        handleChange={handleChange}
                    />
                    {!isMember &&
                        <FormRow
                            type="password"
                            name="confirm_password"
                            value={values.confirm_password}
                            handleChange={handleChange}
                            labelText="confirm password"
                        />
                    }
                    {isMember &&
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input id="link-checkbox" type="checkbox" value="" className="w-[13px] h-[13px] text-[#2CB1BC] bg-gray-100 border-gray-300 rounded focus:ring-[#ffffff00] dark:focus:ring-[#2CB1BC] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="link-checkbox" className="ms-2 text-[11.5px] font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <div className="flex items-center">
                                <button className="ms-2 text-[11.5px] text-[#2cb1bc] font-bold">Forget Password ?</button>
                            </div>
                        </div>
                    }
                    {!isMember &&
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" value="" className="w-[13px] h-[13px] text-[#2CB1BC] bg-gray-100 border-gray-300 rounded focus:ring-[#fff] dark:focus:ring-[#2CB1BC] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="link-checkbox" className="ms-2 text-[11.5px] font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-[#2CB1BC] dark:text-[#2CB1BC] hover:underline">terms and conditions</a>.</label>
                        </div>
                    }
                    <button className="transition-[0.2s] w-full bg-[#2cb1bc] hover:bg-[#208DA1] text-white h-[38px] rounded-md mt-5 shadow-md hover:shadow-lg">
                        {isMember ? 'Sign In' : 'Sign Up'}
                    </button>
                    <div className="flex mt-7 justify-end pr-2">
                        <p className="text-[12px] text-[#333]">{values.isMember ? 'Not a member yet?' : 'Already a member?'}</p>
                        <button type='button' onClick={toggleMember} className='text-[12px] ml-2 text-[#2CB1BC] bg-none'>
                            {values.isMember ? 'SignUp' : 'SignIn'}
                        </button>
                    </div>
                </div>
            </Wrapper>
    );
}

export default Login;