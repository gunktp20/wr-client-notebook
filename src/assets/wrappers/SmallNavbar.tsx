
import styled from "styled-components";

const Wrapper = styled.article`
    display:none;
    
    @media screen and (min-width:0px) and (max-width:600px) {
        position:fixed;
        display:flex;
        top:0;
        background-color:#fffffffc;
        width:100%;
        padding:1.5rem;
    }
    
`

export default Wrapper