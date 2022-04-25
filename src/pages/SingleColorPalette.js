import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { SingleColorHelper } from '../Helpers/SingleColorHelper';
import ColorBox from '../components/ColorBox';
import Navbar from '../components/Navbar';
import PaletteFooter from '../components/PaletteFooter';
import useStyles from '../styles/SingleColorPaletteStyles';


const SingleColorPalette = () => {
  const { colorId, paletteId } = useParams();
  const [level, setLevel] = useState(500);
  const [mode, setMode] = useState('hex');
  const [open, setOpen] = useState(false);


const { back, backBtn, paletteClass, colors } = useStyles();

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
      showFullPalette={false}
      mode={color[mode]}
    />
  ))  

  return (
    <div className={paletteClass}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={handleChange}
        setOpen={setOpen}
        open={open}
        mode={mode}
        showSlider={false}  />
      <div className={colors}>
        {colorBoxes}
        <div className={back}><Link to={`/palette/${paletteId}`} className={backBtn}>GO BACK</Link></div>
      </div>
      <PaletteFooter palette={palette} />
    </div>
  )
}

export default SingleColorPalette