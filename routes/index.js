var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/',(req,res)=>{
    res.render('index')
})

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



    // // Youtube API - Setup URL
    // var output = '';
    // var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
    // // Query needs to be based off of user input
    // var query = 'design';
    // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey)
    //     .then((res) => {
    //         output = res.data.items[0].id.videoId
    //         // Returning the output of JSON file to the next promise
    //         return output
    //     }).then((output) =>{
    //         // Utilizing output from previous promise to render onto next page once API call is complete
    //         res.render('index', {
    //             pageTitle: 'Welcome!',
    //             videoLink: output})
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // })
            
module.exports = router;