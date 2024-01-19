import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    newComponentContainer: {
        display: 'flex',
    },
    innerContainer1: {
        backgroundColor: 'red',
        color: 'white',
        padding:'0.5%'
    },
    innerContainer2: {
        backgroundColor: 'black',
        color: 'white',
        flex: '1',
        padding:'0.5%',
        overflow: 'hidden',
        position: 'relative',
    },
    movingtext: {
        whiteSpace: 'nowrap',
        animation: '$moveText 30s linear infinite',
        textTransform:"uppercase"
    },
    '@keyframes moveText ': {
        '0%': {
            transform: 'translateX(100%)'
        },
        '100%': {
            transform: 'translateX(-140%)'
        }
    }
})