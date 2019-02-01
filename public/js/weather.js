// WEATHER API

var city = 'Houston'
var apiKey = '&&APIKEY=0312eb22f231c98c931a5137466c8e3f';
var unitFahrenheit = '&&units=imperial';

var url = 'http://api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=-95.3698' + apiKey + unitFahrenheit;
    $.get(url)
    .done((result)=>{
        var round = Math.floor(result.main.temp);
        var degree = '&deg;F';
        var total = round + degree;
        total.replace(`/\s/g, ''`);
        $('#navTemp').html(total);
    })
