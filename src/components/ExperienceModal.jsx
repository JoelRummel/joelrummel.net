import React from "react";
import { Dialog, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import SkillPill from "./SkillPill";

const useStyles = makeStyles({
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
    }
})

const ExperienceModal = ({ experience, open, onClose }) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down('sm'))
    const {
        company,
        jobTitle,
        image,
        longDescription,
        skills
    } = experience;

    return (
        <Dialog fullScreen={fullscreen} maxWidth="md" fullWidth scroll="body" open={open} onClose={onClose}>
            <div style={{ padding: 20 }}>
                <Typography variant="h2">{company}</Typography>
                <Typography variant="h4" gutterBottom>{jobTitle}</Typography>
                <img src={image.default} alt={company} className={classes.image} />
                <div style={{ marginTop: 15, marginBottom: 15 }}>
                    {
                        skills.map(skillSet => (
                            <div>
                                <Typography display="inline" variant="body2" style={{ fontWeight: 'bold' }}>
                                    {skillSet.label}:
                                </Typography>
                                {
                                    skillSet.items.map(skill => (
                                        <SkillPill skill={skill} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>{longDescription}</Typography>
            </div>
        </Dialog>
    );
}

export default ExperienceModal;