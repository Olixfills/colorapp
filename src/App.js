import React, {  } from 'react'
import Palette from './components/Palette';
import SeedPalettes from './SeedPalettes';
import {generatePalette} from './Helpers/ChromaHelper'


function App() {
  console.log(generatePalette(SeedPalettes[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(SeedPalettes[4]) }/>
    </div>
  );
}

export default App;
