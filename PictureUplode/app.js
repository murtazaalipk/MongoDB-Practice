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

const Storage = multer.diskStorage({
  destination: 'uplode',
  filename: (req,file,cb) => {
    cb(null, file.originalname)
  },
});

const uplode = multer ({
  storage:Storage
}).single('testImage')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/uplode',(req, res) =>{
    uplode(req,res,(err)=>{
      if(err){
        console.log(err)
      }
      else{
        const newImage = new ImageModel({
        name: req.body.name:
        image:{
          data:req.file.filename,
          contentType: "image/png"
        }
        })
        newImage.save()
        .then(()=> res.send("succeessfully uplode")).catch(err=>console.log(err))
      }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})