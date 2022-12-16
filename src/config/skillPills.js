const SKILLS_LOOKUP = {
    'C++': { type: 'language' },
    'Java': { type: 'language' },
    'Python': { type: 'language' },
    'Scala': { type: 'language' },
    'HTML': { type: 'language', end: 'front' },
    'CSS': { type: 'language', end: 'front' },
    'JavaScript': { type: 'language', end: 'front' },
    'PHP': { type: 'language', end: 'back' },
    'TypeScript': { type: 'language' },
    'React.js': { type: 'tech', end: 'front' },
    'React Native': { type: 'tech', end: 'front' },
    'Amazon Web Services': { type: 'tech', end: 'back' },
    'Node.js': { type: 'tech', end: 'back' },
    'Google Apps Script': { type: 'tech', end: 'back' },
    'MySQL': { type: 'tech', end: 'back' },
    'NoSQL': { type: 'tech', end: 'back' },
    'DynamoDB': { type: 'tech', end: 'back' },
    'Distributed Systems': { type: 'tech', end: 'back' },
    'Redux': { type: 'tech', end: 'front' },
    'Expo': { type: 'tech', end: 'front' },
    'Material-UI': { type: 'tech', end: 'front' },
    'Jest': { type: 'tech', end: 'test' },
    'Cypress': { type: 'tech', end: 'test' },
    'Google Test': { type: 'tech', end: 'test' },
    'Git': { type: 'tool' },
    'GitHub': { type: 'tool' },
    'Jira': { type: 'tool' },
    'Asana': { type: 'tool' },
    'Figma': { type: 'tool' },
    'Bitbucket': { type: 'tool' },
    'Godot': { type: 'tool' },
    'GameMaker: Studio': { type: 'tool' },
    'Agile Development': { type: 'skill' },
    'Full Stack Development': { type: 'skill' },
    'Video Game Development': { type: 'skill' },
    'Test-Driven Development': { type: 'skill' },
    'Automated Testing': { type: 'skill' },
    'Continuous Integration': { type: 'skill' },
    'Continuous Deployment': { type: 'skill' }
};

for (const skillName of Object.keys(SKILLS_LOOKUP)) {
    SKILLS_LOOKUP[skillName].name = skillName;
}

export default SKILLS_LOOKUP;