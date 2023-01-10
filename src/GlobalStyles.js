import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const GlobalStyle = () => {
    return (
        <>
            <GlobalStyles
                styles={{
                    html: {
                        '-webkit-font-smoothing': 'antialiased',
                        '-moz-osx-font-smoothing': 'grayscale',
                        height: '100%',
                        width: '100%'
                    },
                    body: {
                        '*, *::before, *::after': { boxSizing: 'border-box' }
                    },
                    img: {
                        maxWidth: '100%',
                    }
                }} />
        </>
    )
}

export default GlobalStyle;