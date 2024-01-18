import styled from "styled-components";

const Wrapper = styled.article`
    background-color:#e0fcff2d;
    display:flex;
    width:100%;
    height:100vh;
    position:relative;
    flex-direction:column;
    .intro-section-1{
        background-image: linear-gradient(to right top, #208da1, #09738f, #005b7b, #024364, #062c4d);
    }

    @media screen and (min-width:0px) and (max-width:600px) {
        .intro-section-1{
            
        }
        .welcome{

        }
        .platform-intro{

        }
    }


`

export default Wrapper