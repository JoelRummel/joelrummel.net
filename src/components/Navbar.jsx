import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NAVIGATION_BUTTONS from "../config/navigationButtons";

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
    const dropdownMenu = useMediaQuery('(max-width: 528px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    {dropdownMenu &&
                        <div>
                            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                                <MenuIcon style={{ color: 'white' }} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={menuOpen}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Experiences</MenuItem>
                                <MenuItem onClick={handleClose}>Bio</MenuItem>
                                <MenuItem onClick={handleClose}>Resume</MenuItem>
                            </Menu>
                        </div>
                    }
                    <div className={classes.headerLinkContainer}>
                        <Typography component={Link} to="/" variant="h5" className={classes.headerLink}>joelrummel.net</Typography>
                    </div>
                    {!dropdownMenu && (
                        <>
                            {NAVIGATION_BUTTONS.map(({ label, to }) =>
                                <Button component={Link} to={to} variant="contained" color="primary" className={classes.navLink}>{label}</Button>
                            )}
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default Navbar;