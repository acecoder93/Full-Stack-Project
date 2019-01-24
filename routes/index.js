var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/',(req,res)=>{
     // Youtube API - Setup URL
    var output = '';
    var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
    // Query needs to be based off of user input
    var query = 'design';
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey)
        .then((res) => {
            output = res.data.items[0].id.videoId
            // Returning the output of JSON file to the next promise
            return output
        }).then((output) =>{
            // Utilizing output from previous promise to render onto next page once API call is complete
            res.render('index', {
                pageTitle: 'Welcome!',
                videoLink: output})
        })
            });
module.exports = router;