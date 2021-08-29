import React from 'react';
import Container from '@material-ui/core/Container';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Dashboard />
    </Container>
  </ThemeProvider>
);
export default App;
