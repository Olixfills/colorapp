import React, {  } from 'react'
import Palette from './components/Palette';
import SeedPalettes from './SeedPalettes';



function App() {
  return (
    <div className="App">
      <Palette {...SeedPalettes[4] }/>
    </div>
  );
}

export default App;
