const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('hi there from app-2! deploy it! now! again! app -2 changed');
});

app.get('/hi', (req, res) => {
    res.json('hi');
});

app.listen(3001, () => {
    console.log('app listening on port 3001');
});
