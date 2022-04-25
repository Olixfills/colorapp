import React, {useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import useStyles from '../styles/ColorBoxStyles'




const ColorBox = ({ background, mode, moreUrl, showFullPalette }) => {
  
  const [copied, setCopied] = useState(false)
  const { hex,name } = background;
  
  const
    { colorBox, copyText, colorName, seeMore, copyBtn,
      boxContent, copyOverlay, showOverlay, copyMsg, showMsg }
      = useStyles({ background, showFullPalette });
  
  const changeCopyState = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)  
    }, 1500);
}
  


  return (
    <CopyToClipboard text={mode} onCopy={changeCopyState}>
      <div className={colorBox} style={{ background: hex }}>
        <div className={`${copyOverlay} ${copied && showOverlay}`} style={{ background: hex }} />
        <div className={`${copyMsg} ${copied && showMsg}`}>
          <h1>Copied!</h1>
          <p className={copyText}>{mode}</p>
        </div>
      <div>
        <div className={boxContent}>
          <span className={colorName}>{name}</span>
        </div>
        <button className={copyBtn}>Copy</button> 
        </div>
        {showFullPalette && 
      <Link to={moreUrl} onClick={e => e.stopPropagation()}>
          <span className={seeMore}>MORE</span>
      </Link>}
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox