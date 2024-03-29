import React, { useEffect, useState } from "react";
import { Dialog, IconButton, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import CloseIcon from '@material-ui/icons/Close';
import SkillPill from "./SkillPill";

const useStyles = makeStyles(theme => ({
    image: {
        maxWidth: '100%',
        maxHeight: '35vh',
        borderRadius: 5,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
        boxShadow: 'gray 0px 5px 8px 3px'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));

const defaultExperience = {
    company: '',
    jobTitle: '',
    image: '',
    shortDescription: '',
    skills: []
};

const ExperienceModal = ({ experience = defaultExperience, open, onClose }) => {
    const [cachedExperience, setCachedExperience] = useState(experience);

    useEffect(() => {
        if (experience.company) setCachedExperience(experience);
    }, [experience]);

    const theme = useTheme();
    const classes = useStyles(theme);
    const fullscreen = useMediaQuery(theme.breakpoints.down('sm'))
    const {
        company,
        jobTitle,
        image,
        longDescription,
        skills
    } = (experience.company ? experience : cachedExperience);

    return (
        <Dialog fullScreen={fullscreen} maxWidth="md" fullWidth scroll="body" open={open} onClose={onClose}>
            <div style={{ padding: 20 }}>
                <Typography variant="h2">{company}</Typography>
                <Typography variant="h4" gutterBottom>{jobTitle}</Typography>
                <img src={image.default} alt={company} className={classes.image} />
                <div style={{ marginTop: 15, marginBottom: 15 }}>
                    {
                        skills.filter(s => s.label !== "HIDDEN").map(skillSet => (
                            <div key={skillSet.label}>
                                <Typography display="inline" variant="body2" style={{ fontWeight: 'bold' }}>
                                    {skillSet.label}:
                                </Typography>
                                {
                                    skillSet.items.map(skill => (
                                        <SkillPill skill={skill} key={skill} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <Typography variant="body1" component="div" style={{ whiteSpace: 'pre-line' }}>
                    <div dangerouslySetInnerHTML={{ __html: longDescription }} />
                </Typography>
            </div>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </Dialog>
    );
}

export default ExperienceModal;