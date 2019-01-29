// From Current Project:

// var express = require('express');
// var router = express.Router();
// const axios = require('axios');

// router.get('/',(req,res)=>{

// News API
    // var articles = '';
    // var html = '';
    // axios.get('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=6afdb077c1994657ab9284882c5c296e')
    // .then((res)=>{
    //     var articles = res.data.articles;

    //     for(var i = 1; i < 5; i++){
    //         html +=  articles[i].title
            
//             `
//             // console.log(articles[i].title)
//             // console.log(articles[i].title)
//         }
//         // articles.forEach((item)=>{
//         //     html += `
//         //     <li> 
//         //     <h3>${item.title}</h3>
//         //     <h4>${item.urlToImage}</h4>
//         //     </li> 
//             // ` 
//         // })

    // }
    // console.log(html)
    // })
    // res.render('index', {
    //     value: html
    // })
// })

// MusicMatch Lyrics API

// let url = "https://api.musixmatch.com/ws/1.1/";
// let apiKey = "ef6abb8eef7c6304f0b70e408e1a6514";

// // Front End Project - Weather API Code
// let url = "http://api.openweathermap.org/data/2.5/weather?zip=";
// let apiKey = "bd0b9c18de9f9362ac0f2bc5223f84cf";
// let zipCode = inputs[0];
// $.get(url + zipCode + ',us&units=imperial&APPID=' + apiKey)
// .done((result) => {
//     var fahrenheit = result.main.temp;
//     var degF = Math.floor(fahrenheit);
//     var degree = '&deg;F';
//     var total = degF + degree;
//     total.replace(`/\s/g, ''`);
//     var city = result.name;
//     $('#weather').append(`${total} | ${city}`);
