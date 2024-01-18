import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props : any) => (`
  width: 28px;
  height: 28px;
  background: ${props.color};
  cursor: pointer;
  outline: 1px solid #208da1;
  border:3px solid #fff;
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    width:200px;
    border-radius: 10px;
    background: #bb3333;
    outline: none;
    position:absolute;
    top:0;

    &::-webkit-slider-thumb {
        -webkit-appearance:none;
        width:15px;
        height:15px;
        border-radius:50%;
        background:#208da1;
        cursor:pointer;
        border:4px solid #333;

      ${props => sliderThumbStyles(props)}
      
    }

    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }

  .range-line{
    background-color:#208da1;
    height:15px;
    position:absolute;
    width:200px;
    border-radius:10px;
    top:0;
  }
`;

export default class SS extends React.Component {
  state = {
    value: 50
  }


  handleOnChange = (e:any) => this.setState({ value: e.target.value })

  render() {
    return (
      <Styles opacity={this.state.value > 10 ? (this.state.value / 255) : .1} color={this.props.color}>
        <div className='relative'>
          <input type="range" min={0} max={255} value={this.state.value} className="slider" onChange={this.handleOnChange} />
          <div className="value">{this.state.value}</div>
          <div className="range-line"></div>
        </div>
      </Styles>
    )
  }
}