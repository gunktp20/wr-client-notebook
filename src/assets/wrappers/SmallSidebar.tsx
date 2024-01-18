
import styled from "styled-components";

const Wrapper = styled.article`
    display:none;

    @media screen and (min-width:0px) and (max-width:900px){
        position:fixed;
        display:flex;
        top:0;
        background-color:#fffffffc;
        width:100%;
        padding:1.5rem;
        z-index:2;
    }

    
    
`

export default Wrapper