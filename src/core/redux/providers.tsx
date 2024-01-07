'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider, createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';
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
