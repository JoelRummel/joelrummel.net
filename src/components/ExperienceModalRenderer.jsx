import React from 'react';
import { useHistory, useLocation } from 'react-router';
import PROJECT_EXPERIENCE from '../data/projectExperience';
import WORK_EXPERIENCE from '../data/workExperience';
import ExperienceModal from './ExperienceModal';

const ExperienceModalRenderer = () => {
    const location = useLocation();
    const history = useHistory();
    const allExperiences = [...WORK_EXPERIENCE, ...PROJECT_EXPERIENCE];

    const params = new URLSearchParams(location.search);
    const experienceTitle = params.get('e');

    const experience = allExperiences.find(item => item.company === experienceTitle);

    const clearSearchParam = () => {
        history.push({ pathname: location.pathname, search: "" });
    }

    return (
        <ExperienceModal open={!!experience} experience={experience} onClose={clearSearchParam} />
    );
}

export default ExperienceModalRenderer;