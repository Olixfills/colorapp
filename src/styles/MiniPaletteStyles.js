import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    color: {
        // backgroundColor: '#dae1e4',
        borderRadius: '5px',
        height:'100px',
        width: '100%',
        overflow:'hidden'
        
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative',

    },
    emoji: {
        fontSize: '1.5rem',
        marginLeft: '0.5rem'
    },
    miniBoxes: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        // marginBottom:'-6.5px'
        marginBottom:'-7px'
    }
});

export default useStyles