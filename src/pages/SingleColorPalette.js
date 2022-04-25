import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { SingleColorHelper } from '../Helpers/SingleColorHelper';
import ColorBox from '../components/ColorBox';
import Navbar from '../components/Navbar';
import PaletteFooter from '../components/PaletteFooter';


const SingleColorPalette = () => {
  const { colorId, paletteId } = useParams();
  const [level, setLevel] = useState(500);
  const [mode, setMode] = useState('hex');
  const [open, setOpen] = useState(false);

  let palette = SingleColorHelper(paletteId);
  
const changeLevel = (level) => {
    setLevel(level)
  }
  
  function handleChange(curr) {
    setMode(curr.toLowerCase());
    setOpen(true)
  }


  const gatherShades = (palette, colorForFilter) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorForFilter)
      )
    }
    return shades.slice(1);
  }
  const select = gatherShades(palette, colorId);
  // console.log(select);


  const colorBoxes = select.map(color => (
    <ColorBox
      key={color.hex}
      name={color.name}
      background={color}
      showLink={false}
      mode={color[mode]}
    />
  ))  

  return (
    <div className="single-color palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={handleChange}
        setOpen={setOpen}
        open={open}
        mode={mode}
        showSlider={false}  />
      <div className="palette-colors">
        {colorBoxes}
        <div className="go-back color-box"><Link to={`/palette/${paletteId}`} className='back-btn'>GO BACK</Link></div>
      </div>
      <PaletteFooter palette={palette}/>
    </div>
  )
}

export default SingleColorPalette