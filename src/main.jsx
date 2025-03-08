// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Correct path
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme'; // Correct path
import { CssBaseline } from '@mui/material';
import { GlobalStyles } from './styles/GlobalStyles'; //Correct path


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);