import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';

const defaultExperience = {
    company: '',
    jobTitle: '',
    image: '',
    shortDescription: ''
};

const ExperienceCard = ({ experience = defaultExperience }) => {
    const location = useLocation();
    const history = useHistory();

    const {
        company,
        jobTitle,
        image,
        shortDescription
    } = experience;

    const addQueryParam = () => {
        history.push({ pathname: location.pathname, search: '?e=' + company });
    }

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
                <CardActions style={{ marginTop: 'auto', width: '100%' }}>
                    <Button fullWidth color="primary" variant="contained" onClick={addQueryParam}>
                        See More
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ExperienceCard;