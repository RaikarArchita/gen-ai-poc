import { Box, AppBar, Typography, Toolbar, IconButton } from '@mui/material'
import React from 'react'
import Group63 from '../../assets/Group 63.svg'
import Group64 from '../../assets/Group 64.svg'
import Group65 from '../../assets/Group 65.svg'
import theme, { Search, StyledInputBase } from '../../styles/theme'
import SearchIcon from '@mui/icons-material/Search';
import controlTower from '../../assets/Control Tower.svg';

const TopBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.common.black,
                boxShadow: 'none',
                height: '10%',
                paddingRight: '1%'
            }}>
                <Toolbar>
                    <img src={controlTower} alt='' style={{
                        height:'80%',
                        marginRight:'1%'
                    }}/>
                    <Typography
                        variant="h1"
                    >
                        Control Tower
                    </Typography>
                    <Search>
                        <div>
                            <StyledInputBase
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <SearchIcon style={{ color: '#ADAFD6', marginTop: '1%' }} />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', gap: '5%' } }}>
                        <IconButton size="large">
                            <img src={Group65} alt='' />
                        </IconButton>
                        <IconButton size="large">
                            <img src={Group63} alt='' />
                        </IconButton>
                        <IconButton size="large">
                            <img src={Group64} alt='' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar