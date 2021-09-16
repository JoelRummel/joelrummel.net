import { Chip, makeStyles } from '@material-ui/core';
import React from 'react';
import SKILLS_LOOKUP from '../config/skillPills';

const useStyles = makeStyles({
    chipStyles: {
        margin: 4
    }
});

const skillToColor = (skill) => {
    const skillData = SKILLS_LOOKUP[skill];
    if (!skillData) return 'default';
    if (skillData.type === 'language') return 'primary';
    if (skillData.type === 'tech') return 'primary';
    if (skillData.type === 'tool') return 'secondary';
    return 'default';
}

const SkillPill = ({ skill }) => {
    const classes = useStyles();

    const color = skillToColor(skill);

    return (
        <Chip label={skill} className={classes.chipStyles} color={color} />
    );
}

export default SkillPill;