import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    progressbarContainer: {
        position: 'relative',
        marginTop:'1.2vw'
    },
    progressbar: {
        display: 'flex',
        height: '0.6vw',
        overflow: 'hidden',
        marginTop: '3%',
    },
    partition: {
        height: '100%',
        boxSizing: 'border-box',
    },
    percentagelabel: {
        position: 'absolute',
        transform: 'translateX(-50%)',
        top: '130%'
    },
    titleLabel: {
        position: 'absolute',
        transform: 'translateX(-40%)',
        bottom: '110%',
    },
    titles: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
})