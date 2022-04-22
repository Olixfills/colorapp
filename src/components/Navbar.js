import React from 'react'
import Slider from 'rc-slider';
import Dropd from 'react-dropd'
import Snackbar from './Snackbar'
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import 'rc-slider/assets/index.css';
import '../styles/navBar.css';


const Navbar = ({ level, changeLevel, handleChange, setOpen, open, mode }) => {
   


return (
    <nav className='navbar'>
        <div className="logo">
            <a href="/">My Color App</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
        <div className="slider">
        <Slider
        defaultValue={level}
        min={100} max={900}
        onAfterChange={changeLevel}
        step={100} />
        </div>
        </div>
        <div className="select-container">
            <Dropd
                value='HEX'
                list={["HEX", "RGB", "RGBA"]}
                onItemChange={handleChange}
            />
        </div>
        <Snackbar
            open={open}
            setOpen={setOpen}
            mode={mode} />
    </nav>

)
}

export default Navbar