const express = require('express');
const app = express();
const axios = require('axios');
const db = require('./models/');

// Middleware
app.use(express.static('public'));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// Passport Setup
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var Sequelize = require('sequelize');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// Middleware› 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Set-Up Sessions
var myStore = new SequelizeStore({
    db: db.sequelize
});

app.use(session({
        secret: 'this-is-fullstack-secret',
        store: myStore,
        resave: false,
        proxy: true
}));

myStore.sync();

// Passport Config
app.use(passport.initialize());
app.use(passport.session());

// Registration Form
app.post('/register', (req, res) =>{

    let pwd = bcrypt.hashSync(req.body.password,8);
    
    db.users.create({username:req.body.username, password:pwd, email:req.body.email, firstName:req.body.firstName, lastName:req.body.lastName, zipcode:req.body.zipcode})
    .then((result)=>{
        res.redirect('/login')
    })
});

// To-do in Progress
app.post('/todo', (req,res)=>{
    console.log('check1')
    console.log("inside app: "  + req.body.toDo);
    console.log('check2')
    console.log(req.body.mainInput);
    console.log('check3')
    console.log(req.body);
    console.log('check4')
    console.log('hello world');
    db.todos.create({tasks:req.body.toDo})
    // .then((Result)=>{
    //     res.redirect('/dashboard');
    // })
})
// app.post('/todo', (req,res)=>{
//     console.log('check1')
//     console.log("inside app: "  + req.body.toDo);
//     console.log('check2')
//     console.log(req.body.mainInput);
//     console.log('check3')
//     console.log(req.body);
//     console.log('check4')
//     console.log('hello world');
//     res.send('hello');
//     db.todos.create({tasks:req.body.toDo})
//     .then((Result)=>{
//         res.redirect('/dashboard');
//     })
// })


// Verify Credentials
app.post('/login', passport.authenticate('local', {successRedirect: '/dashboard',
                                                    failureRedirect: '/login'}));


passport.use(new LocalStrategy((username, password, done)=>{
    // console.log('I am inside of local strategy')
    db.users.findAll({where: {username: username}})
    .then((res)=>{
        if(res != null){
            let data = res[0]
            console.log(data)

            bcrypt.compare(password, data.password, (err, res)=>{
                console.log("A result was found");
                console.log(res)
                if(res){
                    done(null,{id: data.id, username: data.username})
                }
            })
        }else{
            console.log("Nothing as found");
            done(null,false)
        }
    })
}));

//  Access Control
// If someone visits main page, auto-directed to register/login
// Regular site is acessible; however to acess the dashboard and individual will have to login (this is where all the key functionality will exist)
app.get('/', (req, res)=>{

    if(!req.isAuthenticated()){
        res.redirect('/register');
        return;
    }
    res.render('dashboard')});

app.get('/music', (req, res) => {
    res.render('music');
});


passport.serializeUser((user,done)=>{
    done(null, user.id);
})

passport.deserializeUser((id, done)=>{
    db.users.findById(parseInt(id, 10))
    .then((data)=>{
        done(null, data);
})});


// Routes
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/login'));
app.use(require('./routes/logout'));
app.use(require('./routes/register'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/google'));
// app.use(require('./routes/todo'));

// Server Listening on Port 5000
app.listen(5000, () => {
   console.log('Listening on port 5000');
});



