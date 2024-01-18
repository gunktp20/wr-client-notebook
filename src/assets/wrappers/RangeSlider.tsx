
import styled from "styled-components";

const Wrapper = styled.article`
    height: 20px;
    width: 280px;
    max-width: 332px;
    border-radius: 4rem;
    display: grid;
    position:relative;
  
  
  .range__content {
    position: relative;
    width: 100%;
    display: flex;
    place-items: center;
    
  }
  
  .range__slider {
    width: 100%;
    height: 11px;
    background-color: #bababa;
    border-radius: 4rem;
    overflow: hidden;

  }
  
  .range__slider-line {
    width: 100%;
    height: 100%;
    background: #208da1;
    width: 0;
  }
  
  .range__thumb {
    width: 25px;
    height: 25px;
    background-color: #208da1;
    border-radius: 50%;
    border: 2px solid #fff;
    outline: 1px solid #208da1;
    position: absolute;
    
  }
  
  .range__value {
    width: 64px;
    height: 64px;
    background: var(--gradient-color);
    position: absolute;
    top: -82px;
    left: -16px;
    border-radius: 2rem 2rem 2rem .25rem;
    transform: rotate(-45deg);
    display: grid;
    place-items: center;
  }
  
  .range__value-number {
    transform: rotate(45deg);
    color: var(--white-color);
    font-size: var(--h1-font-size);
  }
  
  .range__input {
    width: 100%;
    appearance: none;
    height: 16px;
    opacity: 0;
    position: absolute;
  }
  
  .range__input::-webkit-slider-thumb {
    width: 32px;
    height: 32px;
  }
  
  .range__input::-webkit-slider-thumb:hover {
    cursor: pointer;
  }

`;

export default Wrapper