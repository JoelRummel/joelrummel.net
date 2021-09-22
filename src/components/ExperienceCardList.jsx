import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import ExperienceCard from './ExperienceCard';

const useStyles = makeStyles((theme) => ({
    experienceContainer: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

const ExperienceCardList = ({ experiences, header }) => {
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
                        <Grid item style={{ display: 'flex' }} key={experience.company}>
                            <ExperienceCard experience={experience} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
}

export default ExperienceCardList;