import React from 'react'
import useStyles from '../styles/FooterStyles'



const PaletteFooter = ({ palette }) => {
  
const {footer, emoji } = useStyles()


  return (
    <footer className={footer}>
        {palette.paletteName}
        <span className={emoji}>{palette.emoji}</span>
      </footer>
  )
}

export default PaletteFooter