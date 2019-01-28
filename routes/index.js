var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/',(req,res)=>{
<<<<<<< HEAD
    res.render('index',{
        pageTitle: 'Welcome!'
    })
=======
    res.send('Hello World')
>>>>>>> Raul
})

module.exports = router;