import React from 'react'
import theme, { KPICards, PaperComponent } from '../../styles/theme'
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { useStyles } from './DashboardStyles'
import CustomProgressBar from '../../shared/ProgressBar/CustomProgressBar'
import Group83 from '../../assets/Group 83.svg'
import ValueChainContainer from '../../shared/ValueChainContainer/ValueChainContainer'
import { dropdownObj, siteInfo, valueChain } from '../../utils/constantData'
import CustomDropDown from '../../shared/CustomDropDown/CustomDropDown'

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Box className={classes.DashboardContainer}>
      <Grid container spacing={1}>
        <Grid item xs={3.2}>
          <Typography variant='h2' mt={3}>Alerts</Typography>
          <Box style={{ marginTop: '2%', marginBottom: '4%' }}>
            <Typography variant='subtitle2'>Total Revenue at Risk</Typography>
            <Typography variant='h4'>
              <span>$ </span>
              <span style={{ fontSize: '3.2vw', fontWeight: '400', color: theme.palette.red }}>
                912.2 </span>
              <span>Million</span>
            </Typography>
          </Box>
          <Typography variant='subtitle2' color='#2A2A2A'>Shipment Status</Typography>
          <Stack direction='row' spacing={28}>
            <Typography variant='h3'>24k</Typography>
            <Typography variant='h3'>2.4k</Typography>
          </Stack>
          <Box pr={4}>
            <CustomProgressBar partitions={[
              { value: 90, color: theme.palette.green, title: 'Shipped' },
              { value: 10, color: theme.palette.yellow, title: 'Delayed' },
            ]} />
          </Box>
          <Typography variant='h2' mt={8}>KPI</Typography>
          <Box className={classes.KpiContainer}>
            <KPICards>
              <Typography variant='subtitle2'>Total Number Of Shipments</Typography>
              <Typography variant='body1'>26.91
                <span style={theme.typography.h4}>k</span></Typography>
            </KPICards>
            <KPICards>
              <Typography variant='subtitle2'>Total <br/> Quantity</Typography>
              <Typography variant='body1'>4
                <span style={theme.typography.h4}>Million</span></Typography>
            </KPICards>
            <KPICards>
              <Typography variant='subtitle2'>Total <br/> Value</Typography>
              <Typography variant='body1'>
                <span style={theme.typography.h4}>$</span>8.96
                <span style={theme.typography.h4}>Billion</span></Typography>
            </KPICards>
            <KPICards>
              <Typography variant='subtitle2'>On-Time in <br/> Full</Typography>
              <div style={{ display: 'flex', gap: '8%' }}>
                <Typography variant='body1'>7.5<span style={theme.typography.h4}>/10</span></Typography>
                <CircularProgress variant="determinate" value={75} style={{ color: '#80DF53' }} />
              </div>
            </KPICards>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={30}>
            <Grid item xs={6}>
              <PaperComponent className={classes.card1}>
                <Typography variant='subtitle1'>Exceptions by Criticality</Typography>
                <CustomProgressBar partitions={[
                  { value: 56, color: theme.palette.green, title: 'Low' },
                  { value: 10, color: theme.palette.yellow, title: 'Medium' },
                  { value: 15, color: theme.palette.red, title: 'High' },
                ]} marginTopStyle='2.2vw' />
              </PaperComponent>
              <Box className={classes.dropdownContainer}>
                {dropdownObj.map((dropdown) => (
                  <CustomDropDown key={dropdown.name} {...dropdown} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <PaperComponent className={classes.card2}>
                <Typography variant='subtitle1'>All Site Location</Typography>
                <img src={Group83} alt='' className={classes.mapImage} />
                <Stack direction='row' spacing={3} alignSelf='center'>
                  {
                    siteInfo.map((item, index) => (
                      <Stack direction='column' key={index}>
                        <Typography variant='body3'>{item.label}</Typography>
                        <Typography variant='subtitle4' sx={{
                          color: item.countColor
                        }}>{item.count}</Typography>
                        <div style={{ border: `1px solid ${item.countColor}`, width: '2.4vw' }} />
                      </Stack>
                    ))
                  }
                </Stack>
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