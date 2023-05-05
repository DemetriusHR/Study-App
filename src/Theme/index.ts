import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F0F0F0',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#fff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
