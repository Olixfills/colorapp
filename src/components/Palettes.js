import React, { useState, useEffect } from 'react'
import Palette from './Palette'
import { useParams } from 'react-router-dom';
import { generatePalette } from '../Helpers/ChromaHelper'


const Palettes = ({palettes}) => {
const [currPal, setCurrPal] = useState(palettes[4])
  const { id } = useParams();

  useEffect(() => {
    const mainPal = palettes.find((palette) => palette.id === id);
    setCurrPal(mainPal)
  },[])
console.log(currPal);

  return (
    <div><Palette palette={generatePalette(currPal)}/></div>
  )
}

export default Palettes