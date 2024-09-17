import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0e6668',
        light: '#bbae9e',
      },
      secondary: {
        main: '#bbae9e',
      },
      grey: {
        300: '#d1d3d9',
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          }),
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            textAlign: 'justify',
          }),
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: '15px',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#fff',
          },
        },
      },
    },
  })
);
