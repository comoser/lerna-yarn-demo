console.log('TAG NAME:');
console.log(process.env.TAG_NAME);

const parts = process.env.TAG_NAME && process.env.TAG_NAME.split('@');

console.log('App to deploy: ', parts && parts[0]);
console.log('Version to deploy: ', parts && parts[1]);

process.exit(0);
