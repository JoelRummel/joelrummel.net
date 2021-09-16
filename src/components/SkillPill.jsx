import { Chip, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    chipStyles: {
        margin: 4
    }
});

const SkillPill = ({ skill }) => {
    const classes = useStyles();

    return (
        <Chip label={skill} className={classes.chipStyles} color="primary" />
    );
}

export default SkillPill;