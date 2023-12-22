import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import React, { useState } from 'react'
import theme from '../../styles/theme';
import { useStyles } from './CustomDropdownStyles';
import { ArrowDropDown } from '@mui/icons-material';

export const iconComponent = (props) => {
    return (
        <ArrowDropDown
            className={props.className}
            sx={{
                fill: 'black',
                fontSize: '2vw',
            }}
        />
    )
}

const CustomDropDown = ({ label, placeholderValue, name, options }) => {
    const classes = useStyles()
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <Stack direction='column'>
            <InputLabel sx={{ typography: theme.typography.subtitle2 }}>{label}</InputLabel>
            <FormControl sx={{ minWidth: 170, mt: 1 }} size="small">
                <Select
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectContainer}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 0,
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#2A2A2A"
                        },
                        borderRadius: '3vw',
                        fontSize: '1vw',
                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                backgroundColor: '#FFFFFF',
                                borderRadius: '1vw'
                            },
                        },
                    }}
                    IconComponent={iconComponent}
                >
                    <MenuItem value="" disabled>
                        <em className={classes.placeholderStyles}>{placeholderValue} </em>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option} value={option} style={{ fontSize: '1vw' }}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )
}

export default CustomDropDown