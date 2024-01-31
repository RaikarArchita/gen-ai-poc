import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

export const useStyles = makeStyles({
    DashboardContainer: {
        backgroundColor: theme.palette.background.paper,
        padding: '1% 0 2% 2%'
    },
    card1: {
        padding: '6% 7% 20% 7%',
        width: '30vw'
    },
    card2: {
        padding: '6%',
        width: '34vw', display: 'flex', flexDirection: 'column'
    },
    mapImage: {
        width: '28vw', height: 'auto', alignSelf: 'center'
    },
    dropdownContainer: {
        border: '1px solid #2A2A2A',
        borderRadius: '1vw', display: 'flex',
        gap: '4vw', padding: '1% 2% 1% 2%', width: '66vw',
        marginBottom: '2%'
    },
    leftPanelContainer: {
        paddingLeft: '4%',
        paddingBottom: '1%',
        paddingTop: '4%',
        boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.25)',
        borderRadius:'2vw'
    },
    shipmentInner: {
        display: 'flex', alignItems: "center", gap: "6px"
    },
    colorBars: {
        width: '22px', height: '5px', borderRadius: '14px'
    },     
})