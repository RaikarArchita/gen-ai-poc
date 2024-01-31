import React from 'react'
import theme, { LeftPanelCards, PaperComponent } from '../../styles/theme'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { useStyles } from './DashboardStyles'
import CustomProgressBar from '../../shared/ProgressBar/CustomProgressBar'
import Group83 from '../../assets/Group 83.svg'
import ValueChainContainer from '../../shared/ValueChainContainer/ValueChainContainer'
import { dropdownObj, exceptionCategory, valueChain } from '../../utils/constantData'
import CustomDropDown from '../../shared/CustomDropDown/CustomDropDown'
import NorthIcon from '@mui/icons-material/North';
import CircularProgressBar from '../../shared/CircularProgressBar/CircularProgressBar'

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Box className={classes.DashboardContainer}>
      <Grid container spacing={2.6}>
        <Grid item xs={3.1}>
          <Box className={classes.leftPanelContainer}>
            <Typography variant='h3' mb={2}>Performance Overview</Typography>
            <LeftPanelCards>
              <Typography variant='subtitle2'>Total Revenue at Risk</Typography>
              <Box>
                <Typography variant='h4'>
                  <span>$ </span>
                  <span style={{ fontSize: '3.2vw', fontWeight: '400', color: theme.palette.red }}>
                    4.2 </span>
                  <span>Million</span>
                </Typography>
                <Typography variant='body2'><span style={{ color: theme.palette.red }}>
                  5%<NorthIcon sx={{ verticalAlign: 'bottom', marginBottom: '3px' }} fontSize='small' /></span>
                  from Jan 2024</Typography>
              </Box>
            </LeftPanelCards>
            <LeftPanelCards>
              <Typography variant='subtitle2' color='#2A2A2A'>{"CO" + String.fromCharCode(0x2082)} Emissions</Typography>
              <Typography variant='h4'><span style={{ fontSize: '40px', fontWeight: "400" }}>602</span>Tons</Typography>
            </LeftPanelCards>
            <LeftPanelCards>
              <Typography variant='subtitle2'>Shipment <br /> Delivery Status</Typography>
              <Stack direction='row' spacing={7}>
                <Stack direction='column' spacing={1}>
                  <Box className={classes.shipmentInner}>
                    <Box style={{ backgroundColor: '#80DF53' }} className={classes.colorBars}></Box>
                    <Typography variant='body2'>On Time</Typography>
                  </Box>
                  <Box className={classes.shipmentInner}>
                    <Box style={{ backgroundColor: '#F05524' }} className={classes.colorBars}></Box>
                    <Typography variant='body2'>Delayed</Typography>
                  </Box>
                </Stack>
                <Box style={{ marginTop: '-60px', transform: 'scaleX(-1) rotate(117deg)'}}>
                  <CircularProgressBar values={[75, 25]} colors={['#80DF53', '#F05524']} />
                </Box>
              </Stack>
            </LeftPanelCards>
            <LeftPanelCards>
              <Typography variant='subtitle2'>Total Value</Typography>
              <Typography variant='h4'>
                <span>$ </span>
                <span style={{ fontSize: '3.2vw', fontWeight: '400' }}>
                  420</span>
                <span>Million</span>
              </Typography>
            </LeftPanelCards>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.dropdownContainer}>
            {dropdownObj.map((dropdown) => (
              <CustomDropDown key={dropdown.name} {...dropdown} />
            ))}
          </Box>
          <Grid container spacing={30}>
            <Grid item xs={6}>
              <PaperComponent className={classes.card1}>
                <Typography variant='subtitle1'>Exceptions by Criticality</Typography>
                <CustomProgressBar partitions={[
                  { value: 33, color: theme.palette.green, title: 'Low' },
                  { value: 30, color: theme.palette.yellow, title: 'Medium' },
                  { value: 37, color: theme.palette.red, title: 'High' },
                ]} marginTopStyle='2.2vw'/>
              </PaperComponent>
              <PaperComponent className={classes.card1} style={{ marginTop: '6%' }}>
                <Typography variant='subtitle1'>Exceptions Category</Typography>
                <Stack direction='row' mt={1}>
                  {exceptionCategory.map((item, index) => (
                    <Box key={index} style={{ display: 'flex', alignItems: "center", gap: '3px' }}>
                      <Box style={{ backgroundColor: `${item.color}`, width: '23px', height: '17px', borderRadius: '10px' }}></Box>
                      <Typography variant='body3'>{item.label}</Typography>
                    </Box>
                  ))}
                </Stack>
                <CustomProgressBar partitions={exceptionCategory.map((x) => x)} progressbarHeight='10'/>
              </PaperComponent>
            </Grid>
            <Grid item xs={6}>
              <PaperComponent className={classes.card2}>
                <Typography variant='subtitle1'>All Site Location</Typography>
                <img src={Group83} alt='' className={classes.mapImage} />
              </PaperComponent>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <PaperComponent style={{
              width: '66vw', marginTop: '2%',
              padding: '3%'
            }}>
              <Typography variant='subtitle1'>Value Chain View</Typography>
              <Stack direction='row' spacing={2} mt={2}>
                <ValueChainContainer valueChain={valueChain} />
              </Stack>
            </PaperComponent>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard