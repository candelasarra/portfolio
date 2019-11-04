import React from 'react';
import Main from './Components/visual/homeScreen/Main';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#ff353c'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
