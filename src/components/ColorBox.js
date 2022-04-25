import React, {useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import '../styles/colorBox.css'



const ColorBox = ({ background, mode, moreUrl, showLink}) => {
const [copied, setCopied] = useState(false)
const { hex,name } = background;
const isDarkColor = chroma(hex).luminance() <= 0.1
const isLightColor = chroma(hex).luminance() >= 0.55
// console.log(isDarkColor);
  const changeCopyState = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500);
}
  


  return (
    <CopyToClipboard text={mode} onCopy={changeCopyState}>
      <div className='color-box' style={{ background: hex }}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background: hex }} />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1 >Copied!</h1>
          <p className={isLightColor && 'dark-text'}>{mode}</p>
        </div>
      <div className="copy-container">
        <div className="box-content">
          <span className={isDarkColor && 'light-text'}>{name}</span>
        </div>
        <button className={`copy-btn ${isLightColor && 'dark-text'}`}>Copy</button>
        </div>
        {showLink && 
      <Link to={moreUrl} onClick={e => e.stopPropagation()}>
          <span className={`more ${isLightColor && 'dark-text'}`}>MORE</span>
      </Link>}
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox