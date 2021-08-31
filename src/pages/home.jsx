import { Grid, makeStyles, useTheme, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
        paddingLeft: 10,
        paddingRight: 10,
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        }
    }
}));

const Home = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Grid container style={{ overflow: "hidden" }}>
            <Grid item md={5} xs={12}>
                <div className={classes.imageContainer}>
                    <img src={StadiumPose} alt="" className={classes.image} />
                    <div className={classes.stripeContainer}>
                        <div className={classes.diagonalStripe} />
                    </div>
                    <div className={classes.edgeContainer}>
                        <div className={classes.diagonalEdge} />
                    </div>
                </div>
            </Grid>
            <Grid item md={7} xs={12}>
                <Grid container spacing={4} alignContent="center" className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h1" align="center">Hi, I'm Joel.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">I'm a graduating computer scientist from the University of Michigan.</Typography>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2} item xs={12} style={{ paddingBottom: 20 }}>
                        <Grid item>
                            <Button component={Link} to="/experiences" variant="contained" color="primary">Experiences</Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/bio" variant="contained" color="primary">Bio</Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/resume" variant="contained" color="primary">Resume</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Home;