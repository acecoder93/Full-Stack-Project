var express = require('express');
var router = express.Router();


router.get('/google',(req,res)=>{
    res.render('google')
});


module.exports = router;