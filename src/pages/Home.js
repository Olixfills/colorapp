import React from 'react'
import { Link } from 'react-router-dom';



const Home = ({ palettes }) => {
    
return (
    <div>
        <h1>My Colors</h1>
        {palettes.map((palette) => {
            const { paletteName, id, emoji } = palette;

            return (
                <div key={id}>
                    
                    <Link to={`/palette/${id}`}><h3>{paletteName} <span>{emoji}</span></h3></Link>
                </div>
            )
        })}
    </div>
)
}

export default Home