// Require Express
const express = require('express');
const app = express();

//API AXIOS
const axios = require('axios');

//EJS SETUP
app.set('view engine','ejs');
app.set('views','views')

app.use(express.static('public'));

app.use(require('./routes/index'))


//WEATHER API
var city = 'Houston'

var apiKey = '&&APIKEY=0312eb22f231c98c931a5137466c8e3f';

var unitFahrenheit = '&&units=imperial';





//AXIOS WEATHER API
axios.get('http://api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=-95.3698' + apiKey + unitFahrenheit)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((error)=>{
        console.log(error);
    });









// Server Listening on Port 5000
app.listen(4000, ()=>{
    console.log('Listening on port 4000');
});