import React from "react";
import { Grid } from "@material-ui/core";
import WORK_EXPERIENCE from "../data/workExperience";
import PROJECT_EXPERIENCE from "../data/projectExperience";
import ExperienceCardList from "../components/ExperienceCardList";

const Experiences = () => {
    return (
        <Grid container spacing={2} xs={12}>
            <ExperienceCardList experiences={WORK_EXPERIENCE} header="Work Experience" />
            <ExperienceCardList experiences={PROJECT_EXPERIENCE} header="Projects" />
        </Grid>
    );
}

export default Experiences;
