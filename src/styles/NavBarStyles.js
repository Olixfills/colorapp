import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        height: '6vh',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        fontFamily: "'Alumni Sans Inline One', cursive",
        marginRight: '15px',
        padding: '0px 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'rgb(26, 25, 25)',
        }
    },
    slider: {
        width: '340px',
        margin:' 0 10px',
        display: 'inline-block',
        '& .rc-slider-track': {
            backgroundColor: 'transparent',
        },
        '& .rc-slider-rail': {
            height: '8px',
        },
        '& .rc-slider-handle,.rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
            backgroundColor: 'green',
            border: '2px solid green',
            outline: 'none',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginTop: '-3px',
        },
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '8rem',
    
    }

})



export default useStyles


