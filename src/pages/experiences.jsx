import React from "react";
import { Divider, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar"
import WORK_EXPERIENCE from "../data/workExperience";
import PROJECT_EXPERIENCE from "../data/projectExperience";

const useStyles = makeStyles((theme) => ({
    experienceContainer: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

const ExperienceList = ({ experiences, header }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" style={{ marginTop: 25 }}>
                    {header}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid container item justifyContent="center" spacing={3} className={classes.experienceContainer}>
                {
                    experiences.map(experience => (
                        <Grid item style={{ display: 'flex' }}>
                            <ExperienceCard experience={experience} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
}

const Experiences = () => {
    return (
        <Grid container spacing={2} xs={12}>
            <Navbar />
            <ExperienceList experiences={WORK_EXPERIENCE} header="Work Experience" />
            <ExperienceList experiences={PROJECT_EXPERIENCE} header="Projects" />
        </Grid>
    );
}

export default Experiences;
