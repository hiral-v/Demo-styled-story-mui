import React from 'react';
import MuiTypography from '@mui/material/Typography';


const Typography = (props) => {
    const {value, variant,  } = props
    return (
        <>
            <MuiTypography variant={variant}>{value}</MuiTypography>
        </>
    )
}
export default Typography;