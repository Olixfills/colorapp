import React from 'react';
import { useNavigate } from "react-router-dom";
import MiniPalette from '../components/MiniPalette';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        backgroundColor: 'magenta',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        
        
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: 'white'
    },
    palette: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }

})



const Home = ({ palettes }) => {
    const classes = useStyles()
    let navigate = useNavigate();

     function handleClick(id) {
    navigate(`/palette/${id}`)
  }
    
return (
    <div >
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>My Colors</h1>
                </nav>
                <div className={classes.palette}>
                    {palettes.map((palette) => {
                        return (<div key={palette.id}><MiniPalette palette={palette} handleClick={handleClick} /></div>)
                        })}
                </div>
            </div>
        </div>
    </div>
)
}

export default Home