var express = require('express');
var router = express.Router();


router.get('/todo', (req, res)=>{
    res.render('dashboard');
});


router.post('/todo', (req,res)=>{
    console.log(req.body.toDo);
    let todoTask = req.body.toDo

    // db.todos.create({tasks:todoTask})
    // .then((result)=>{
    //     res.redirect('/dashboard');
    // });
});

module.exports = router;