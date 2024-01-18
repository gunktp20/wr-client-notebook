import React, { InputHTMLAttributes, useEffect } from 'react'
import Wrapper from "../../assets/wrappers/RangeSlider"
import { useState } from 'react'

interface IProp {
  id: string
}

function RangeSlider(props: IProp) {

  const [value, setValue] = useState<number>(0)

  console.log(props)

  useEffect(() => {

    const rangeThumb = document.getElementById(`range-thumb-${props.id}`)
    const rangeLine = document.getElementById(`range-line-${props.id}`)
    const rangeInput = document.getElementById(`range-input-${props.id}`)

    //@ts-ignore
    const thumbPosition = (rangeInput.value / rangeInput.max)
    //@ts-ignore
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth

    // We insert the position of the input thumb
    // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
    //@ts-ignore
    rangeThumb.style.left = (thumbPosition * space) + 'px'
    //@ts-ignore
    rangeLine.style.width = (rangeInput.value * 10) + '%'
  }, [value])

  return (
    <Wrapper>
      <div className="range__content">
        <div className="range__slider">
          <div className="range__slider-line" id={`range-line-${props.id}`}></div>
        </div>

        <div className="range__thumb" id={`range-thumb-${props.id}`}></div>

        <input type="range" className="range__input" id={`range-input-${props.id}`} min="0" max="10" value={value} step="1" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(Number(event.target.value))
        }} />
      </div>
      <div className='flex absolute top-[1.7rem] justify-between w-[100%] pl-5 pr-5 text-[12.5px]'>
        <div>ความหรี่อยู่ที่ระดับ</div>
        <div>{value} %</div>
      </div>
    </Wrapper>
  )
}

export default RangeSlider
