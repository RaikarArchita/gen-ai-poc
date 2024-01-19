import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

export const useStyles = makeStyles({
    DashboardContainer: {
        backgroundColor: theme.palette.background.paper,
        padding: '1% 2% 2% 3%'
    },
    KpiContainer: {
        display: 'flex', flexWrap: 'wrap',
        gap: '2%', rowGap: '1vw', marginTop: '4%',
    },
    card1: {
        padding: '8% 7% 23% 7%',
        width: '29vw'
    },
    card2:{
        padding: '8%',
        width: '34vw', display: 'flex', flexDirection: 'column', gap: '1vw'
    },
    mapImage:{
        width: '28vw', height: 'auto', alignSelf: 'center' 
    },
    dropdownContainer:{
        minWidth: '28vw', border: '1px solid #2A2A2A', padding:"8% 10%",
        marginTop: '7%', borderRadius: '1vw',display:'flex',flexWrap:'wrap',
        rowGap:'1.6vw',gap:'1.3vw'
    }
})