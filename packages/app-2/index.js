const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('hi there from app-2! Feat 2. plus 22');
});

app.get('/hi', (req, res) => {
    res.json('hi');
});

app.listen(3001, () => {
    console.log('app listening on port 3001');
});
