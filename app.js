// Require Express
const express = require('express');
const app = express();
const axios = require('axios');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const db = require('./models/');
const request = require('request');

//EJS SETUP
app.set('view engine','ejs');
app.set('views','views')

app.use(express.static('public'));
// app.use(express.bodyParser());
// app.use(express.cookieParser());

app.use(require('./routes/index'));
app.use(require('./public/weather'));
app.use(require('./public/spotify'));


// //WEATHER API
// var city = 'Houston'

// var apiKey = '&&APIKEY=0312eb22f231c98c931a5137466c8e3f';

// var unitFahrenheit = '&&units=imperial';


// //AXIOS
// axios.get('http://api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=-95.3698' + apiKey + unitFahrenheit)
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });









// Server Listening on Port 5000
app.listen(5000, ()=>{
    console.log('Listening on port 5000');
});