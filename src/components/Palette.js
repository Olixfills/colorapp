/* eslint-disable no-empty-pattern */
import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import '../styles/palette.css'



const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const [mode, setMode] = useState('hex')



  const changeLevel = (level) => {
    setLevel(level)
  }
  
  function handleChange(curr) {
    setMode(curr.toLowerCase())
  }
  
  
  return (
    <div className='palette'>
      <Navbar level={level} changeLevel={changeLevel} handleChange={handleChange} />
        {/* Navbar */}
        <div className="palette-colors" >
        {palette.colors[level].map((color) => {
          const {name} = color
          return <ColorBox key={name} background={color} mode={color[mode]} />
        })}
        </div>
        {/* footer */}
    </div>
  )
}

export default Palette