import React, { useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
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
            <Card style={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
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
                <CardActions style={{ marginTop: 'auto', alignSelf: 'center' }}>
                    <Button color="primary" variant="contained" onClick={() => setShowingModal(true)}>
                        See More
                    </Button>
                </CardActions>
            </Card>
            <ExperienceModal open={showingModal} experience={experience} onClose={() => setShowingModal(false)} />
        </>
    );
};

export default ExperienceCard;