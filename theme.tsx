import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bfff', // Neon blue
    },
    secondary: {
      main: '#32cd32', // Neon green
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;