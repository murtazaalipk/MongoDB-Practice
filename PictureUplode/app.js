const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const ImageModel = require("./image.model")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://murtazaali:hXOVq466dFX8hq2s@cluster0.j1kwwam.mongodb.net/ImageDB" , {useNewUrlParser: true}, { useUnifiedTopology: true });


/* app.get('/', (req, res) => {
  res.send('Hello World')
})
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})