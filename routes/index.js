var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/',(req,res)=>{
    res.render('index',{
        pageTitle: 'The Landing Page'
    })
})

module.exports = router;