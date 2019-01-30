// var express = require('express');
// var router = express.Router();
// const db = require('../models/todos');
// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: false}));



// router.get('/todo', (req, res)=>{
//     res.render('dashboard');
// });

// router.post('/todo', (req,res)=>{
//     console.log("inside app: "  + req.body.toDo);
//     console.log(req.body.mainInput);
//     console.log(req.body);
//     db.todo.create({tasks:req.body.toDo})
//     .then((Result)=>{
//         res.redirect('/dashboard');
//     })})


// router.post('/todo', (req,res)=>{
//     console.log(req.body.toDo);
//     console.log('hello');
//     let todoTask = req.body.toDo

//     // db.todos.create({tasks:todoTask})
//     // .then((result)=>{
//     //     res.redirect('/dashboard');
//     // });
// });

// module.exports = router;