const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://murtazaali:hXOVq466dFX8hq2s@cluster0.j1kwwam.mongodb.net/Practice")

app.get('/', (req, res) => {
    res.send('Express server running');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});