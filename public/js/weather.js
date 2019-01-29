const express = require('express');
const router = express.Router();
const axios = require('axios');

//////////
// OLD
//////////

//WEATHER API
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


//////////
// NEW
//////////

//WEATHER API
var url = "http://api.openweathermap.org/data/2.5/weather?zip=";
var apiKey = '&APPID=0312eb22f231c98c931a5137466c8e3f';
var zipcode = '77095';
var unitFahrenheit = ',us&units=imperial';

//AXIOS
axios.get(url + zipcode + unitFahrenheit + apiKey)
    .then((result)=>{
        console.log(result.data);
        var fahrenheit = result.main.temp;
        var degF = Math.floor(fahrenheit);
        var degree = '&deg;F';
        var total = degF + degree;
        total.replace(`/\s/g, ''`);
        var city = result.name;
        $('#navTemp').append(`${total} | ${city}`);
    })
    .catch((error)=>{
        console.log(error);
});

module.exports = router;