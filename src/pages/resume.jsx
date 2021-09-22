import React from 'react';

const Resume = () => (
    <div style={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 900
    }}>
        <embed
            src={process.env.PUBLIC_URL + "/resources/JoelRummelResume.pdf"}
            type="application/pdf"
            style={{
                width: '100%',
                height: 'calc(100vh - 70px)'
            }}
        />
    </div>
)

export default Resume;