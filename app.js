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

// Stock Information -  alphavantage API key
// var alphaAPI = 'DSORZL6DK0TYSLAP';
// var company = 'MSFT'
// var alphaLink = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + company + '&apikey=' + alphaAPI;

// axios.get(alphaLink)
// .then((res)=>{
//     console.log(res.data['Global Quote']['01. symbol']);
//     console.log(res.data['Global Quote']['05. price']);
//     console.log(res.data['Global Quote']['10. change percent']);
// })
// .catch((err)=>{
//     console.log(err);
// });




// EJS setup
app.set('view engine','ejs');
app.set('views','views')


// Routes
app.use(require('./routes/index'))

// Server Listening on Port 5000
app.listen(5000, ()=>{
    console.log('Listening on port 5000');
});