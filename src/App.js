import React from 'react';
import {
  ThemeProvider
} from '@mui/material/styles';
import { ColorModeContext } from './themes/ColorContext';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { getThemedComponents } from './themes/Default';
import Home from './Pages/Home';
import GlobalStyle from './GlobalStyles';

export default function App() {
  const [mode, setMode] = React.useState('light');
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme(deepmerge( getThemedComponents(mode))),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Home/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}