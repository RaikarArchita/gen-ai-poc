import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

export const useStyles = makeStyles({
    outerBoxContainer: {
        display: 'flex',
        border: `1px solid`,
        borderColor: theme.palette.borderColor,
        borderRadius: '1vw',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        paddingBottom: '2%'
    },
    imageStyles: {

    },
    imageContainer: {
        backgroundColor: theme.palette.borderColor,
        borderRadius: '50%',
        padding: '7%',
        width: '3vw',
        height: '3vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    arrowLine: {
        position: 'absolute',
        top: '50%',
        left: 'calc(100% + 3px)',
        transform: 'translateY(-50%)',
        height: '2px',
    },
    arrowTriangle: {
        position: 'absolute',
        top: '-4px',
        left: '100%',
        width: '0',
        height: '0',
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
    },
    tagOnArrow:{
        position: 'absolute',
        top: '-8px',
        left: '15%',
        backgroundColor:'#FFFFFF',
        border:'1px solid #FF0000',
        borderRadius:'11px',
        width:'38px',
        height:'20px',
        fontSize:'12px',
        fontWeight:"600"
    }
})