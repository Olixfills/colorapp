/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import '../styles/palette.css'
import PaletteFooter from './PaletteFooter'



const Palette = ({ palette }) => {
  
  const [level, setLevel] = useState(500)
  const [mode, setMode] = useState('hex')
  const [open, setOpen] = useState(false) 

// console.log(palette);



  const changeLevel = (level) => {
    setLevel(level)
  }
  
  function handleChange(curr) {
    setMode(curr.toLowerCase());
    setOpen(true)
  }
  
  return (
    
    <div className='palette'>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={handleChange}
        setOpen={setOpen}
        open={open}
        mode={mode}
        showSlider />
        {/* Navbar */}
        <div className="palette-colors" >
        {palette.colors[level].map((color) => {
          const {id} = color
          return <ColorBox
            showLink={true}
            key={id}
            background={color}
            mode={color[mode]}
            moreUrl={`/palette/${palette.id}/${id}`} />
        })}
        </div>
      {/* footer */}
      <PaletteFooter palette={palette}/>
      
    </div>
  )
}

export default Palette