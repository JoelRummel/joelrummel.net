import React, { useState, useRef } from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import WORK_EXPERIENCE from "../data/workExperience";
import PROJECT_EXPERIENCE from "../data/projectExperience";
import SKILLS_LOOKUP from "../config/skillPills";
import SkillPill from "../components/SkillPill";
import ExperienceCardList from "../components/ExperienceCardList";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState('');
    const headerRef = useRef(null);

    const SKILLS_VALUES = Object.values(SKILLS_LOOKUP);
    const categories = [
        { label: "Languages", values: SKILLS_VALUES.filter(s => s.type === 'language') },
        { label: "Front-end tech", values: SKILLS_VALUES.filter(s => s.type === 'tech' && s.end === 'front') },
        { label: "Back-end tech", values: SKILLS_VALUES.filter(s => s.type === 'tech' && s.end === 'back') },
        { label: "Test frameworks", values: SKILLS_VALUES.filter(s => s.type === 'tech' && s.end === 'test') },
        { label: "Tools", values: SKILLS_VALUES.filter(s => s.type === 'tool') },
        { label: "Skills/workflows", values: SKILLS_VALUES.filter(s => s.type === 'skill') }
    ];

    const experiences = [...WORK_EXPERIENCE, ...PROJECT_EXPERIENCE].filter(experience => {
        for (const skillSet of experience.skills) {
            if (skillSet.items.includes(selectedSkill)) return true;
        }
        return false;
    });

    const handleSelection = (skillSelection) => {
        setSelectedSkill(skillSelection);
        setTimeout(() => headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' }), 100);
    }

    return (
        <Grid container spacing={2} xs={12} style={{ paddingLeft: 16 }}>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" style={{ marginTop: 25 }}>
                    Skills
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    My extensive work history brings a deep and adaptable skillset to the table.
                    But don't just take my word for it - choose a skill or a tool below and see
                    everything that I've done with it.
                </Typography>
            </Grid>
            <Grid container item xs={12} spacing={2}>
                {
                    categories.map(category => (
                        <Grid item xs={12}>
                            <Typography display="inline" style={{ fontWeight: 'bold' }}>
                                {category.label}:
                            </Typography>
                            {
                                category.values.map(skill => (
                                    <SkillPill
                                        onClick={() => handleSelection(skill.name)}
                                        outlined={selectedSkill !== skill.name}
                                        skill={skill.name} />
                                ))
                            }
                        </Grid>
                    ))
                }
            </Grid>
            <div style={{ width: '100%', position: 'relative' }}>
                <div ref={headerRef} style={{ position: 'absolute', top: 580 /* Header + 1.5 card height */ }} />
            </div>
            <ExperienceCardList experiences={experiences} header="Experiences" />
        </Grid>
    );
}

export default Skills;
