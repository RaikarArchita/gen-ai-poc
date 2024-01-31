import React from 'react'
import { useStyles } from './CustomProgressStyles';
import { Typography } from '@mui/material';

const CustomProgressBar = ({ partitions, marginTopStyle,progressbarHeight }) => {
    const classes = useStyles()

    return (
        <div className={classes.progressbarContainer} style={{ marginTop: marginTopStyle }}>
            <div className={classes.progressbar} style={{height:`${progressbarHeight}px`}}>
                {partitions.map((partition, index) => {
                    const { value, color, title } = partition;
                    const percentage = `${value}%`;

                    return (
                        <div key={index} className={classes.partition}
                            style={{
                                width: percentage, backgroundColor: color,
                                borderRadius: index === 0 ? '10px' :
                                    index === partitions.length - 1 ? '0 10px 10px 0' :
                                        '0 10px 10px 0',
                                marginLeft: index === 0 ? 0 : '-3px',
                                zIndex: 9999 - index
                            }}>
                            <Typography className={classes.percentagelabel} variant='h5'
                                ml={1.8}>
                                {value}%
                            </Typography>
                            <Typography variant='body2' className={classes.titleLabel}
                                ml={1.8}>
                                {title}
                            </Typography>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}

export default CustomProgressBar