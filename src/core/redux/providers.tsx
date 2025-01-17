'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider, createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';
const purple1 = 'linear-gradient(348deg, #8822B0 22%, #953289 55%) 0% 0% no-repeat padding-box !important'
const theme = createTheme({
  typography: {
    fontFamily: ['__Alumni_Sans_ee155b', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    success: {
        main: green[400],
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.4);',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          background: 'pink'
        },
        thumb: {
          // background: purple1
        }
      }
      
    }
   
  }
});
// Create a Layer around React App for Redux
export function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
