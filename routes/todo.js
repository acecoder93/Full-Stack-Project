var express = require('express');
var router = express.Router();

router.get('/todo', (req,res)=>{
    res.render('dashboard');
});


module.exports = router;