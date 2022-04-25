import chroma from 'chroma-js';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  colorBox: {
    width: '20%',
    height: ({ showFullPalette }) => showFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-7px',
    '&:hover button': {
      opacity: 1,
      transition: '0.5s',
    }
  },
  copyText: {
    color: ({ background }) => chroma(background.hex).luminance() >= 0.55 ? 'rgba(0, 0, 0, 0.5)' : 'white',
    fontSize: '1.5rem',
    fontWeight: 100,
  },
  colorName: {
    color: ({ background }) => chroma(background.hex).luminance() <= 0.1 ? 'white' : 'rgba(0, 0, 0, 0.8)',
    
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    color: ({background}) => chroma(background.hex).luminance() >= 0.55 ? 'rgba(0, 0, 0, 0.5)' : 'white',
    textAlign: 'center',
    lineHeight: '30px',
  },
  copyBtn: {
    color: ({ background }) => chroma(background.hex).luminance() >= 0.55 ? 'rgba(0, 0, 0, 0.5)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginTop: '-15px',
    marginLeft: '-50px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    border: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    opacity: 0,
  },
  boxContent: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    padding: '10px',
    letterSpacing: '1px',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: 1,
    transform: 'scale(50)',
    zIndex: 10,
    position: 'absolute',
  },
  copyMsg: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'white',
    '& h1': {
      fontSize: '4rem',
      fontWeight: 400,
      textShadow: '1px 2px black',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      padding: '1rem',
      textTransform: 'uppercase',
    }
  },
  showMsg: {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 20,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  }
  })


export default useStyles