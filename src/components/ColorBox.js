import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import '../styles/colorBox.css'


const ColorBox = ({ background }) => {
    const { color, name } = background;
  return (
    <CopyToClipboard text={color} >
    <div className='color-box' style={{ background: color }}>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-btn">Copy</button>
      </div>
      <span className='more'>More</span>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox