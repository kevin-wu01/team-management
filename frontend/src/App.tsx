import React from 'react';
import logo from './logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import UserList from './pages/UserList';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4F4E4E',
        light: '#B0B4B4',
        dark: '#A8ADAD'
      },
      secondary: {
        main: '#4E7CF6',
        contrastText: '#D77E7D'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <UserList />
    </ThemeProvider>
  );
}

export default App;
