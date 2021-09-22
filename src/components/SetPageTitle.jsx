import React, { useEffect } from 'react';

const SetPageTitle = ({ title }) => {
    useEffect(() => {
        document.title = `${title} | Joel Rummel`;
    }, [title]);

    return <></>;
}

export default SetPageTitle;