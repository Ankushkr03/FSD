import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Paper, Button as MUIButton } from '@mui/material';
import './App.css';
import Form from './components/Form';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#646cff',
          },
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [darkMode]
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          background: darkMode
            ? 'linear-gradient(135deg, #1a1a1a 0%, #242424 100%)'
            : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          transition: 'background 0.3s ease'
        }}
      >
        <Paper
          elevation={12}
          sx={{
            p: 4,
            borderRadius: 4,
            maxWidth: 600,
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: darkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <MUIButton
              variant="outlined"
              onClick={toggleTheme}
              sx={{ borderRadius: 20 }}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </MUIButton>
          </Box>
          <Form />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;