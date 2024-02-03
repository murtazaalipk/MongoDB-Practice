const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://murtazaali:hXOVq466dFX8hq2s@cluster0.j1kwwam.mongodb.net/formDB" , {useNewUrlParser: true}, { useUnifiedTopology: true });

// Create a schema

const formSchema = {
    name: String,
    title: String
};

const Form = mongoose.model("Form", formSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const form = new Form({
        name: req.body.name,
        title: req.body.title
    });
    form.save()
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});