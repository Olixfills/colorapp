import React from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';



const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    color: {
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        height:'150px',
        width: '100%',
        overflow:'hidden'
        
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative',

    },
    emoji: {
        fontSize: '1.5rem',
        marginLeft: '0.5rem'
    },
    miniBoxes: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        // marginBottom:'-6.5px'
        marginBottom:'-7px'
    }
});


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