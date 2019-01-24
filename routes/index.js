var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/',(req,res)=>{
     // Youtube API - Setup URL
    var output = '';
    var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
    var query = 'design';
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey)
        .then((res) => {
            output = res.data.items[0].id.videoId})
            console.log(output);
            // console.log(videoID);
            res.render('index', {
                pageTitle: 'Welcome!',
                videoID: output
            })});

module.exports = router;