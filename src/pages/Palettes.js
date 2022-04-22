import React, {  } from 'react'
import Palette from '../components/Palette'
import { useParams } from 'react-router-dom';
import { generatePalette } from '../Helpers/ChromaHelper'


const Palettes = ({palettes}) => {
// const [currPal, setCurrPal] = useState('')
const { id } = useParams();

// useEffect(() => {
  const mainPal = palettes.find((palette) => palette.id === id);
  // setCurrPal(mainPal)
  const currPal = mainPal
// })
console.log(currPal);

  return (
    <div><Palette palette={generatePalette(currPal)}/></div>
  )
}

export default Palettes