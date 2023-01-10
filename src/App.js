import React from 'react';
import {
  ThemeProvider
} from '@mui/material/styles';
import { ColorModeContext } from './themes/ColorContext';
import BaseButton from './Components/Button/Button'
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  createTheme,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens, getThemedComponents } from './themes/Default';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
    const [mode, setMode] = React.useState();
  
    React.useEffect(() => {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode]);
  
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      []
    );
    let theme = React.useMemo(
      () =>
        createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
      [mode]
    );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
        <BaseButton value="button" variant='contained'/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}