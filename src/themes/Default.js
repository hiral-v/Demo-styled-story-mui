
import {  common } from '@mui/material/colors';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const colorPalette = {
  primary: {
    main: '#00203FFF',
    light: '#B1DED3',
    dark: '#00765A',
  },
  light: {
    secondary: {
      main: '#000',
    },
  },
  dark: {
    secondary: {
      main: '#FFF',
    },
  },
  error: '#FF1F1F',
  success: '#52C41A',
  info: '#00249C',
};

export const getThemedComponents = (mode) => ({
  palette: {
    mode,
    colorPalette
  },
  components: {
    ...(mode === 'light'
      ? {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '4px',
              color: common.white,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            },
          },
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                backgroundColor: colorPalette.primary.main,
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                color: colorPalette.primary.main,
              },
            },
            {
              props: { variant: 'primary', color: 'primary' },
              style: {
                border: '4px dashed blue',
              },
            },
          ],
        },
      }
    : {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '4px',
              color: common.white,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            },
          },
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                backgroundColor: colorPalette.primary.main,
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                color: colorPalette.primary.main,
              },
            },
          ],
        },
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: '#121212',
            }
          }
        }
      }),
  },
  
  typography: {
    allVariants: {
      fontFamily: `"Roboto", sans-serif`,
    },
    h2: {
      fontSize: '41px',
      lineHeight: '48px',
      fontWeight: 700,
      [breakpoints.down('md')]: {
        fontSize: '31px',
        lineHeight: '38px'
      },
    },
    h4: {
      fontSize: '36px',
      lineHeight: '40px',
      fontWeight: 500,
      [breakpoints.down('md')]: {
        fontSize: '26px',
        lineHeight: '30px'
      },

    },
    body1: {
      fontSize: '24px',
      lineHeight: '30px',
      fontWeight: 400,
      [breakpoints.down('md')]: {
        fontSize: '18px',
        lineHeight: '22px'
      },
    },
  },
});

// import { createTheme } from '@material-ui/core/styles';
// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
// const breakpoints = createBreakpoints({});
// const theme = createTheme({
//   props: {
//     MuiCard: {
//       elevation: 3
//     }
//   },
//   palette: {
//     primary: {
//       main: '#242829',
//     },
//     secondary: {
//       main: '#FFF',
//     },
//     error: {
//       main: '#FF1F1F',
//     },
//     success: {
//       main: '#52C41A'
//     },
//     info: {
//       main: '#00249C',
//     },
//     grey: {
//       900: '#000'
//     }
//   },
//   typography: {
//     allVariants: {
//       fontFamily: `"Roboto", sans-serif`,
//     },
//     h2: {
//       fontSize: '41px',
//       lineHeight: '48px',
//       fontWeight: 700,
//       [breakpoints.down('md')]: {
//         fontSize: '31px',
//         lineHeight: '38px'
//       },
//     },
//     h4: {
//       fontSize: '36px',
//       lineHeight: '40px',
//       fontWeight: 500,
//       [breakpoints.down('md')]: {
//         fontSize: '26px',
//         lineHeight: '30px'
//       },

//     },
//     body1: {
//       fontSize: '24px',
//       lineHeight: '30px',
//       fontWeight: 400,
//       [breakpoints.down('md')]: {
//         fontSize: '18px',
//         lineHeight: '22px'
//       },
//     },
//   },
// });

// export default theme;
