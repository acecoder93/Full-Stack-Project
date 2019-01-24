var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
<<<<<<< HEAD
    res.send('Hello Werld')
    
=======
    res.render('index',{
        pageTitle: 'Welcome!'
    })
>>>>>>> 9462421123d4a7873d020bcaba58ef124fa6f720
})

module.exports = router;