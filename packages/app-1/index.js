const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('hi there from app-1. Reset.');
});

app.listen(3000, () => {
    console.log('app listening on port 3000');
});
