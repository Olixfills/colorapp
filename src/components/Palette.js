/* eslint-disable no-empty-pattern */
import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/palette.css'



const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)

  const changeLevel = (level) => {
    setLevel(level)
  }
  
  return (
    <div className='palette'>
      <div className="slider">
      <Slider
        defaultValue={level}
        min={100} max={900}
        onAfterChange={changeLevel}
        step={100} />
      </div>
        {/* Navbar */}
        <div className="palette-colors" >
        {palette.colors[level].map((color) => {
          const {name} = color
          return <ColorBox key={name} background={color} />
        })}
        </div>
        {/* footer */}
    </div>
  )
}

export default Palette