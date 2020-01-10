import React from 'react';
import Main from './Components/visual/homeScreen/Main';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#ff353c'
    }
  },
  typography: {
    fontFamily: 'Lekton'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
