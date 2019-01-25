// Require Express
const express = require('express');
const app = express();
// API AXIOS - npm install axios
const axios = require('axios');

// Require database
// const db = require('./models');

// Middleware
app.use(express.static('public'));

// API Call
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
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'));


// Routes
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));

// Server Listening on Port 5000
app.listen(5000, () => {
    console.log('Listening on port 5000');
});