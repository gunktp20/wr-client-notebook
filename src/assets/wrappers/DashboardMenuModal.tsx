import styled from "styled-components";

const Wrapper = styled.article`
    display:none;
    
    @media screen and (min-width:0px) and (max-width:900px){
        display:flex;
        background-color:#00000089;
        z-index:3;
        width:100%;
        height:100vh;
        position:fixed;
        top:0;
        left:0;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        padding:2rem;
    }

`

export default Wrapper