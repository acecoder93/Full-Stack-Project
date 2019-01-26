var express = require('express');
var router = express.Router();

// router.get('/logout', (req,res)=>{
//     res.render('logout');
// });

router.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        req.logout();
        res.redirect('/login');
    })
});



module.exports = router;