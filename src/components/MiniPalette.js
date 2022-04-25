import React from 'react'
import useStyles from '../styles/MiniPaletteStyles';


const MiniPalette = ({palette, handleClick}) => {
    const classes = useStyles();
    
    const { paletteName, emoji, colors, id } = palette;
    
    const miniColorBoxes = colors.map((color) => {
        return <div className={classes.miniBoxes} style={{background: color.color}} key={color.name} />
    })
    
        
    return (
        <div className={classes.root} onClick={() => handleClick(id)}>
            <div className={classes.color}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
  )
}

export default MiniPalette