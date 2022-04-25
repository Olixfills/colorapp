import { generatePalette } from '../Helpers/ChromaHelper'
import SeedPalettes from '../SeedPalettes';



function SingleColorHelper( paletteId) {
const mainPal = SeedPalettes.find((palette) => palette.id === paletteId);
const currPal = mainPal
const palette = generatePalette(currPal);

    
    return palette;
}

export  {SingleColorHelper}


