import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

export const useStyles = makeStyles({

    selectContainer: {
        backgroundColor: theme.palette.common.white
    },
    placeholderStyles:{
        fontSize: theme.typography.subtitle3.fontSize,
        color: 'rgba(0, 0, 0, 0.5)' ,
        fontStyle:'normal'
    }
})