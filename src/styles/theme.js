import { InputBase, Paper, createTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF',
            paper: '#EEF0F9'
        },
        common: {
            black: '#000000',
            white: '#FFFFFF'
        },
        green: '#80DF53',
        orange: '#F05524',
        red: '#FF0000',
        yellow: '#F5E35B',
        blue: '#3735BA',
        borderColor: '#2A2A2A'
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: '22px',
            fontWeight: 600,
            color: '#2A2A2A',
            lineHeight:'33px'
        },
        h2: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#2A2A2A',
            lineHeight: '24px'
        },
        h3: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#2A2A2A',
            lineHeight:'22.5px'
        },
        h4: {
            fontSize: '14px',
            fontWeight: 600,
        },
        h5: {
            fontSize: '12px',
            fontWeight: 600,
            color: '#2A2A2A'
        },
        body1: {
            fontSize: '30px',
            fontWeight: 400,
            color: '#2A2A2A',
            lineHeight:'45px'
        },
        body2: {
            fontSize: '12px',
            fontWeight: 400,
            color: '#2A2A2A',
            lineHeight:'18px'
        },
        body3: {
            fontSize: '10px',
            fontWeight: 400,
            lineHeight: '15px',
        },
        subtitle1: {
            fontSize: '18px',
            lineHeight:'27px'
        },
        subtitle2: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        subtitle3: {
            fontSize: '12px',
        },
        subtitle4: {
            fontSize: '9px',
            fontWeight: 600,
        }
    }
})

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    marginRight: theme.spacing(2),
    marginLeft: '16%',
    width: '40vw',
    height: '50%',
    display:'flex',
    gap:'5%',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        transition: theme.transitions.create('width'),
        width: '35vw',
        fontSize: '1vw',
        marginLeft:'4%',
    },
}));

export const KPICards = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.borderColor}`,
    borderRadius: '1vw',
    width: '10vw',
    height:'130px',
    padding: '2% 0 2% 2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
}))

export const PaperComponent = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderRadius: '1vw'
}))
export default theme