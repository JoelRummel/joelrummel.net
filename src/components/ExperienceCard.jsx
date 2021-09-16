import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import ExperienceModal from './ExperienceModal';

const ExperienceCard = ({ experience }) => {
    const [showingModal, setShowingModal] = useState(false);

    const {
        company,
        jobTitle,
        image,
        shortDescription
    } = experience;

    return (
        <>
            <Card style={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => setShowingModal(true)}>
                    <CardMedia style={{ height: 140, objectFit: 'contain' }} image={image?.default || require('../resources/experiences/nbfapp.png').default} />
                    <CardContent>
                        <Typography variant="h5">
                            {company}
                        </Typography>
                        <Typography style={{ marginBottom: 12 }} color="textSecondary">
                            {jobTitle}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ExperienceModal open={showingModal} experience={experience} onClose={() => setShowingModal(false)} />
        </>
    );
};

export default ExperienceCard;