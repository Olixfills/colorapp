/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import useStyles from '../styles/PaletteStyles'




const Palette = ({ palette }) => {
  
  const [level, setLevel] = useState(500)
  const [mode, setMode] = useState('hex')
  const [open, setOpen] = useState(false) 

const {paletteClass, colors} = useStyles()


  const changeLevel = (level) => {
    setLevel(level)
  }
  
  function handleChange(curr) {
    setMode(curr.toLowerCase());
    setOpen(true)
  }
  
  return (
    
    <div className={paletteClass}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={handleChange}
        setOpen={setOpen}
        open={open}
        mode={mode}
        showSlider />
        {/* Navbar */}
        <div className={colors} >
        {palette.colors[level].map((color) => {
          const {id} = color
          return <ColorBox
            showFullPalette={true}
            key={id}
            background={color}
            mode={color[mode]}
            moreUrl={`/palette/${palette.id}/${id}`} />
        })}
        </div>
      {/* footer */}
      <PaletteFooter palette={palette} />
      
    </div>
  )
}

export default Palette