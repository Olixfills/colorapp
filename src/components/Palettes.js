import React, { useState, useEffect } from 'react'
import Palette from './Palette'
import { useParams } from 'react-router-dom';
import SeedPalettes from '../SeedPalettes';
import { generatePalette } from '../Helpers/ChromaHelper'


const Palettes = () => {
const [currPal, setCurrPal] = useState(SeedPalettes[4])
  const { id } = useParams();

  useEffect(() => {
    const mainPal = SeedPalettes.find((palette) => palette.id === id);
    setCurrPal(mainPal)
  },[id])
console.log(currPal);

  return (
    <div><Palette palette={generatePalette(currPal)}/></div>
  )
}

export default Palettes