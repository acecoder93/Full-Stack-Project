// Require Express
const express = require('express');
const app = express();

// API AXIOS - npm install axios
const axios = require ('axios');

// API Call
// News API
// axios.get('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=6afdb077c1994657ab9284882c5c296e')
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// Youtube API - Setup URL
// var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
// var query = 'kobe+bryant';
// axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey)
//     .then((res)=>{
//         console.log(res.data.items)
//     })
//     .catch((err)=>{
//         console.log(err)
//     });


app.set('view engine','ejs');
app.set('views','views')

app.use(require('./routes/index'))

// Server Listening on Port 5000
app.listen(5000, ()=>{
    console.log('Listening on port 5000');
});