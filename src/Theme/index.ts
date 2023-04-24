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
  },
});

export default theme;
