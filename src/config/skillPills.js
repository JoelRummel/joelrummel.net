const SKILLS_LOOKUP = {
    'C++': { type: 'language' },
    'Java': { type: 'language' },
    'Python': { type: 'language' },
    'HTML': { type: 'language', end: 'front' },
    'CSS': { type: 'language', end: 'front' },
    'JavaScript': { type: 'language', end: 'front' },
    'PHP': { type: 'language', end: 'back' },
    'React.js': { type: 'tech', end: 'front' },
    'React Native': { type: 'tech', end: 'front' },
    'Node.js': { type: 'tech', end: 'back' },
    'Google Apps Script': { type: 'tech', end: 'back' },
    'MySQL': { type: 'tech', end: 'back' },
    'AWS': { type: 'tech', end: 'back' },
    'S3': { type: 'tech', end: 'back' },
    'Lambda': { type: 'tech', end: 'back' },
    'DynamoDB': { type: 'tech', end: 'back' },
    'API Gateway': { type: 'tech', end: 'back' },
    'Amazon Cognito': { type: 'tech', end: 'back' },
    'Redux': { type: 'tech', end: 'front' },
    'Expo': { type: 'tech', end: 'front' },
    'Material-UI': { type: 'tech', end: 'front' },
    'Jest': { type: 'tech', end: 'test' },
    'Cypress': { type: 'tech', end: 'test' },
    'Google Test': { type: 'tech', end: 'test' },
    'Git': { type: 'tool' },
    'GitHub': { type: 'tool' },
    'Jira': { type: 'tool' },
    'Figma': { type: 'tool' },
    'Bitbucket': { type: 'tool' },
    'Godot': { type: 'tool' },
    'GameMaker: Studio': { type: 'tool' },
    'Agile Development': { type: 'skill' },
    'Full Stack Development': { type: 'skill' },
    'Video Game Development': { type: 'skill' },
    'Test-Driven Development': { type: 'skill' },
    'Automated Testing': { type: 'skill' },
    'SDLC': { type: 'skill' }
};

for (const skillName of Object.keys(SKILLS_LOOKUP)) {
    SKILLS_LOOKUP[skillName].name = skillName;
}

export default SKILLS_LOOKUP;