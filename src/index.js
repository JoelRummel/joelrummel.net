import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Home from './pages/home';
import Experiences from './pages/experiences';
import reportWebVitals from './reportWebVitals';
import Skills from './pages/skills';
import ScrollToTop from './components/ScrollToTop';
import ExperienceModalRenderer from './components/ExperienceModalRenderer';
import Navbar from './components/Navbar';
import SetPageTitle from './components/SetPageTitle';
import Resume from './pages/resume';

const theme = createTheme({
    palette: {
        primary: {
            main: '#243B68'
        },
        secondary: {
            main: '#989262'
        },
        background: {
            default: '#DDD'
        }
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        h1: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h2: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h3: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h4: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h5: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h6: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/">
                        <SetPageTitle title="Home" />
                        <Home />
                    </Route>
                    <Route>
                        <Navbar />
                        <Switch>
                            <Route path="/experiences">
                                <SetPageTitle title="Experiences" />
                                <Experiences />
                            </Route>
                            <Route path="/skills">
                                <SetPageTitle title="Skills" />
                                <Skills />
                            </Route>
                            <Route path="/resume">
                                <SetPageTitle title="Resume" />
                                <Resume />
                            </Route>
                            <Route>
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
                <ExperienceModalRenderer />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
