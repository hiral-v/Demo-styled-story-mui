
import { amber, deepOrange, grey, blue, common } from '@mui/material/colors';

const palette = {
  light: {
    primary: {
      main: '#00203FFF',
      light: '#B1DED3',
      dark: '#00765A',
    },
  },
};

// export const theme = createTheme({
//   props: {
//     MuiCard: {
//       elevation: 3
//     }
//   },
//   palette: {
//     primary: {
//       main: '#00203FFF',
//       light: '#B1DED3',
//       dark: '#00765A',
//     },
//     secondary: {
//       main: '#ADEFD1FF',
//     },
//     error: {
//       main: '#FF1F1F',
//     },
//     success: {
//       main: '#52C41A'
//     }
//   },
//   typography: {
//     allVariants: {
//       fontFamily: `'Rubik', sans-serif`,
//       fontWeight: 400,
//     },
//     h2: {
//       fontSize: '37.8209px',
//       lineHeight: '43px',
//     },
//     h4: {
//       fontSize: '32.4179px',
//       lineHeight: '37px',

//     },
//     body1: {
//       fontSize: '21.6119px',
//       lineHeight: '25px',
//     },
//   },
// });

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },

          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
    }),
  },
});

export const getThemedComponents = (mode) => ({
  components: {
    ...(mode === 'light'
      ? {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: grey[800],
              },
            },
          },
          MuiLink: {
            variant: 'h3',
          },
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
                  
                },
              },
              {
                props: { variant: 'outlined' },
                style: {
                  color: palette.light.primary.main,
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
          MuiList: {
            styleOverrides: {
              root: {},
            },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                color: common.white,
                alignItems: 'stretch',
              },
            },
          },
          MuiAccordion: {
            styleOverrides: {
              root: {
                color: common.white,
              },
            },
          },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: blue[800],
              },
            },
          },
        }),
  },
});
