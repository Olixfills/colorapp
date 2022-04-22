import React, {useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import '../styles/colorBox.css'



const ColorBox = ({ background, mode, moreUrl}) => {
const [copied, setCopied] = useState(false)
const { hex,name } = background;


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
          <h1>Copied!</h1>
          <p>{mode}</p>
        </div>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-btn">Copy</button>
        </div>
      <Link to={moreUrl} onClick={e => e.stopPropagation()}>
          <span className='more'>More</span>
      </Link>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox