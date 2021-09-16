import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Home from './pages/home';
import Experiences from './pages/experiences';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
    palette: {
        primary: {
            main: '#243B68'
        },
        secondary: {
            main: '#989262'
        },
        background: {
            default: '#B7BDCD'
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/experiences">
                        <Experiences />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
