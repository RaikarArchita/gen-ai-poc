import React from 'react'
import { useStyles } from './NewComponentStyles'

function NewsComponent() {
    const classes = useStyles()

    return (
        <div className={classes.newComponentContainer}>
            <div className={classes.innerContainer1}>
                CT NEWS
            </div>
            <div className={classes.innerContainer2}>
                <div className={classes.movingtext}>
                    Panama Canal Restrictions : Enough Capacity for Containerships but not gas carriers
                    &nbsp;&nbsp; Panama Canal making drastic cuts to booking slots as drought worsens
                    &nbsp;&nbsp; International Security Warning Issued for Ships in Red Sea
                    &nbsp;&nbsp; Container lines expected greater losses in 2024 due to wars escalation in middle east region
                </div>
            </div>
        </div>
    )
}

export default NewsComponent