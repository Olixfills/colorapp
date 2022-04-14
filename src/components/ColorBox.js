import React, {useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import '../styles/colorBox.css'



const ColorBox = ({ background }) => {
const [copied, setCopied] = useState(false)
const { color, name } = background;


  const changeCopyState = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500);
}



  return (
    <CopyToClipboard text={color} onCopy={changeCopyState}>
      <div className='color-box' style={{ background: color }}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background: color }} />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>
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