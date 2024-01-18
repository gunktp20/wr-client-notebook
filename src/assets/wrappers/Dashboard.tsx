import styled from "styled-components";

const Wrapper = styled.article`
    background-color:#dcdcdc33;
    display:flex;
    width:100%;
    height:100%;
    position:relative;
    flex-direction:row;

    .dashboard-section{
        margin-left:15rem;
    }

    .top-bar{
        box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1);
        z-index:5;
    }

    .devices-container{
        display:grid;
        padding:1.5rem;
        grid-template-columns:1fr 1fr 1fr;
        grid-gap:1.5rem;
        padding-top:6rem;
    }

    .widgets-container{
        display:flex;
        flex-wrap:wrap;
        grid-gap:1.5rem;
        position: relative;
    }

    

    .widget{
        flex-grow:2;
        display:flex;
        justify-content:center;
        position:relative;
        width:max-content;
    }

    .category-widget{
        position:absolute;
        top:0.5rem;
        left:0.8rem;
        font-size:13px;
    }

    .gauge-widget{
        width:120px;
    }


    .dashboard-container{
        padding:1.5rem;
        grid-gap:1.5rem;
        width:100%;
        height:100vh;
        /* background-color:#dcdcdc33; */
    }

    
    @media screen and (min-width:901px) and (max-width:1200px){
        .devices-container{
            grid-template-columns:1fr;
            display:grid;
            padding:1.5rem;
            grid-template-columns:1fr 1fr 1fr;
            grid-gap:1.5rem;
            padding-top:6rem;
        }


        .dashboard-section{
            margin-left:15rem;
        }
    }

    @media screen and (min-width:601px) and (max-width:900px){
        padding-top:1.5rem;
        .devices-container{
            grid-template-columns:1fr;
        }

        .top-bar{
            display:none;
        }

        .dashboard-section{
            margin:0;
        }
    }

    @media screen and (min-width:0px) and (max-width:600px) {
        padding-top:1.5rem;
        .devices-container{
            grid-template-columns:1fr;
        }

        .top-bar{
            display:none;
        }

        .dashboard-section{
            margin:0;
        }
    }
`

export default Wrapper