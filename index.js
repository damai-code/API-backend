const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const url = 'mongodb://localhost/movie'

const app = express();
const port = 3002;

//CONNECT TO DB
mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

// test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Successfully connect to MongoDB")
});

const movieRouter = require('./config/routes')

//PARSING
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//MULTER    

// // post req image
// app.post('/api/photo', (req, res) => {
//     let newItem = new newItem();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.Type = 'image/png';
//     newItem.save();
// });



//ROUTES


app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`)
})
