const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('hi there from app-2');
});

app.listen(3001, () => {
    console.log('app listening on port 3001');
});
