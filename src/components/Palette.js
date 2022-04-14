/* eslint-disable no-empty-pattern */
import React from 'react'
import ColorBox from './ColorBox'
import '../styles/palette.css'



const Palette = ({colors}) => {
  
  return (
      <div className='palette'>
        {/* Navbar */}
        <div className="palette-colors" >
        {colors.map((color) => {
          return <ColorBox key={color.name} background={color} />
        })}
        </div>
        {/* footer */}
    </div>
  )
}

export default Palette