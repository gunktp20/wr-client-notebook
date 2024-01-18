import logo from "../assets/images/logo.png";

interface IProp {
    width?: string
}
const Logo = ({ width }: IProp) => {
    return <img src={logo} alt='warering' className="logo" width={width}></img>;
};

export default Logo;