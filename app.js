const express = require('express');
const app = express();
const axios = require('axios');
<<<<<<< HEAD
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


// Registration form
// Moved to router/register.js
// app.get('/register', (req,res)=>{
//     res.render('register')
// });

app.post('/register', (req, res) =>{

    let pwd = bcrypt.hashSync(req.body.password,8);
    
    db.users.create({username:req.body.username, password:pwd })
    .then((result)=>{
        res.redirect('/login')
    })
})

// Moved content below to routes/login.js
// app.get('/login', (req,res)=>{
//     res.render('login')
// });

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
        // res.redirect('/login');
        return;
    }
    res.render('dashboard')});


//  Moved logout content below to routes/logout.js
// app.get('/logout', (req, res)=>{
//     req.session.destroy((err)=>{
//         req.logout();
//         res.sendStatus(200);
//     })
// });


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
=======
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const db = require('./models/');
const request = require('request');

//EJS SETUP
app.set('view engine','ejs');
app.set('views','views')

app.use(express.static('public'));
// app.use(express.bodyParser());
// app.use(express.cookieParser());

app.use(require('./routes/index'));
app.use(require('./public/weather'));
app.use(require('./public/spotify'));


// //WEATHER API
// var city = 'Houston'

// var apiKey = '&&APIKEY=0312eb22f231c98c931a5137466c8e3f';

// var unitFahrenheit = '&&units=imperial';


// //AXIOS
// axios.get('http://api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=-95.3698' + apiKey + unitFahrenheit)
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });








>>>>>>> Raul

// Server Listening on Port 5000
app.listen(5000, () => {
    console.log('Listening on port 5000');
});