console.log('TAG NAME: ', process.env.TAG_NAME);

const parts = process.env.TAG_NAME && process.env.TAG_NAME.split('@');

console.log('Deploy to ENVIRONMENT: ', parts[0].includes('alpha') ? 'DEVELOPMENT' : 'PRODUCTION');
console.log('App to deploy: ', parts && parts[0]);
console.log('Version to deploy: ', parts && parts[1]);

console.log('changelog to update in docs: ', process.cwd() + '/' + parts[0] + '/' + 'CHANGELOG.md');

console.log('run script: ', 'yarn run:build:' + parts[0]);

process.exit(0);
