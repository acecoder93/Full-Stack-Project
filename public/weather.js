const express = require('express');
const router = express.Router();
const axios = require('axios');



//WEATHER API
var city = 'Houston'

var apiKey = '&&APIKEY=0312eb22f231c98c931a5137466c8e3f';

var unitFahrenheit = '&&units=imperial';

//AXIOS
axios.get('http://api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=-95.3698' + apiKey + unitFahrenheit)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((error)=>{
        console.log(error);
    });







module.exports = router;
