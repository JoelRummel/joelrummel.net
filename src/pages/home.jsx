import { Grid, makeStyles, useTheme, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import NAVIGATION_BUTTONS from "../config/navigationButtons";
import StadiumPose from "../resources/StadiumPose.jpg";

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        objectFit: 'cover',
        [theme.breakpoints.up('md')]: {
            height: '100%'
        },
        [theme.breakpoints.only('sm')]: {
            height: 400
        },
        [theme.breakpoints.only('xs')]: {
            height: 250
        }
    },
    headerSection: {
    },
    imageContainer: {
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        },
        position: 'relative'
    },
    stripeContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: 40
    },
    diagonalStripe: {
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            background: `linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,0) 46%, ${theme.palette.background.default} 46%, ${theme.palette.background.default} 54%, ${theme.palette.background.default} 54%, ${theme.palette.background.default})`
        }
    },
    edgeContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 15,
        width: 40
    },
    diagonalEdge: {
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            background: `linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,0) 46%, ${theme.palette.background.default} 46%, ${theme.palette.background.default} 54%, rgba(0,0,0,0) 54%, rgba(0,0,0,0))`
        }
    },
    contentContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        }
    },
    socialIcons: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: 60
        }
    },
    socialIcon: {
        maxWidth: 30,
        maxHeight: 30
    }
}));

const Home = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Grid container style={{ overflow: "hidden" }}>
            <Grid item md={5} xs={12}>
                <div className={classes.imageContainer}>
                    <img src={StadiumPose} alt="Me" className={classes.image} />
                    <div className={classes.stripeContainer}>
                        <div className={classes.diagonalStripe} />
                    </div>
                    <div className={classes.edgeContainer}>
                        <div className={classes.diagonalEdge} />
                    </div>
                </div>
            </Grid>
            <Grid item md={7} xs={12}>
                <Grid container spacing={3} alignContent="center" justifyContent="center" className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center">Hi, I'm Joel.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center">
                            I'm a graduating computer scientist from the University of Michigan.
                            I've got a wide range of experience in full-stack software development, from
                            web apps to mobile apps. Find out more about me:
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2} item xs={12} style={{ paddingBottom: 20 }}>
                        {
                            NAVIGATION_BUTTONS.map(({ label, to }) => (
                                <Grid item key={label}>
                                    <Button component={Link} to={to} variant="contained" color="primary">
                                        {label}
                                    </Button>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="body1">
                            Or you can check out my social accounts:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center" alignItems="center" spacing={2} className={classes.socialIcons}>
                        <Grid item>
                            <a href="https://www.linkedin.com/in/joel-rummel-985277172/" target="_blank" rel="noreferrer">
                                <img
                                    src={require('../resources/social/linkedin.png').default}
                                    alt="LinkedIn profile"
                                    className={classes.socialIcon}
                                />
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://github.com/JoelRummel" target="_blank" rel="noreferrer">
                                <img
                                    src={require('../resources/social/github.png').default}
                                    alt="GitHub profile"
                                    className={classes.socialIcon}
                                />
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://stackoverflow.com/users/4052428/joel-rummel" target="_blank" rel="noreferrer">
                                <img
                                    src={require('../resources/social/stackoverflow.png').default}
                                    alt="Stack Overflow profile"
                                    className={classes.socialIcon}
                                />
                            </a>
                        </Grid>
                    </Grid>
                    {/*<Grid item xs={12}>
                        <Typography align="center" variant="body1">
                            Or you can:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary">Ask me about my thoughts on the state of Ohio</Button>
                    </Grid>*/}
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Home;
