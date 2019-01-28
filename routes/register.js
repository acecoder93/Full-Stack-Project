var express = require('express');
var router = express.Router();

router.get('/register', (req,res)=>{
    res.render('register');
});


module.exports = router;