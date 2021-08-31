import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    headerLinkContainer: {
        flexGrow: 1
    },
    headerLink: {
        color: 'inherit',
        textDecoration: 'inherit',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    navLink: {
        marginRight: theme.spacing(1)
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <div className={classes.headerLinkContainer}>
                    <Typography component={Link} to="/" variant="h5" className={classes.headerLink}>joelrummel.net</Typography>
                </div>
                <Button component={Link} to="/experiences" variant="contained" color="secondary" className={classes.navLink}>Experiences</Button>
                <Button component={Link} to="/bio" variant="contained" color="primary" className={classes.navLink}>Bio</Button>
                <Button component={Link} to="/resume" variant="contained" color="primary" className={classes.navLink}>Resume</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;