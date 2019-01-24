var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.render('index',{
        pageTitle: 'Welcome!'
    })
})

module.exports = router;