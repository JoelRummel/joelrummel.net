import React from "react";
import { Divider, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar"
import WORK_EXPERIENCE from "../data/workExperience";

const useStyles = makeStyles((theme) => ({
    experienceContainer: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

const Experiences = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Grid container spacing={2} xs={12} style={{ overflow: "hidden" }}>
            <Navbar />
            <Grid item xs={12}>
                <Typography variant="h3" align="center">
                    Work Experience
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid container item justifyContent="center" spacing={3} className={classes.experienceContainer}>
                {
                    WORK_EXPERIENCE.map(experience => (
                        <Grid item style={{ display: 'flex' }}>
                            <ExperienceCard experience={experience} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    );
}

export default Experiences;
