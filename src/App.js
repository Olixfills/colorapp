import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Palettes from './pages/Palettes';
import Home from './pages/Home';
import SeedPalettes from './SeedPalettes';
import SingleColorPalette from './pages/SingleColorPalette';
// import { generatePalette } from './Helpers/ChromaHelper'


function App() {
 
  return (
    <Routes>
      <Route exact path='/' element={<Home palettes={SeedPalettes} />} />
      <Route path='/palette/:id' element={<Palettes palettes={SeedPalettes} />} />
      <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette />} />
      <Route path='*' element={<h1>Error Page</h1>} />

    </Routes>


    // <div className="App">
    //   <Palette palette={generatePalette(SeedPalettes[4]) }/>
    // </div>
  );
}

export default App;
