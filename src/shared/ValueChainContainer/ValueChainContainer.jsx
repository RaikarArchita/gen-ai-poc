import React, { Fragment } from 'react'
import { useStyles } from './ValueChainContainerStyles'
import { Box, Stack, Typography } from '@mui/material'

const ValueChainContainer = ({ valueChain }) => {
    const classes = useStyles()

    return (
        <Fragment>
            {valueChain.map((item, index) => (
                <Box className={classes.outerBoxContainer} key={index}
                    style={item.innerObj.length > 1 ? { width: '30vw' } :
                        { width: '10vw' }}>
                    <Typography variant='subtitle2'
                        sx={{
                            position: 'absolute',
                            top: '-6%',
                            backgroundColor: '#ffffff'
                        }}>
                        {item.headerLabel}
                    </Typography>
                    <Stack direction='row' spacing={2} mt={7} px={2}>
                        {item.innerObj.map((ele, subIndex) => (
                            <Stack direction='column' spacing={2}
                                alignItems='center' key={subIndex}>
                                <div className={classes.imageContainer}>
                                    <img src={ele.imageUrl} alt='' className={classes.imageStyles} />
                                    {index < valueChain.length - 1 && (
                                        <div
                                            className={classes.arrowLine}
                                            style={{
                                                width: item.innerObj.length - 1 === subIndex ? '70px' : '60px',
                                                backgroundColor: '#000000',
                                            }}
                                        >
                                            {index===1 &&
                                                <div className={classes.tagOnArrow}>47</div>}
                                            <div
                                                className={classes.arrowTriangle}
                                                style={{
                                                    borderLeft: '10px solid #000000',
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <Typography variant='subtitle2'>
                                    {ele.subLabel}
                                </Typography>
                            </Stack>))}
                    </Stack>
                </Box>
            ))
            }
        </Fragment>
    )
}

export default ValueChainContainer