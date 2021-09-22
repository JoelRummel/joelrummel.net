import React from 'react';
import ResumePDF from '../resources/JoelRummelResume.pdf';

const Resume = () => (
    <div style={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 900
    }}>
        <embed
            src={ResumePDF}
            type="application/pdf"
            style={{
                width: '100%',
                height: 'calc(100vh - 70px)'
            }}
        />
    </div>
)

export default Resume;