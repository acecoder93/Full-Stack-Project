const express = require('express');
const app = express();
const axios = require('axios');
const db = require('./models/');

// Middleware
app.use(express.static('public'));


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


// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');


// Passport Config
app.use(passport.initialize());
app.use(passport.session());


// Registration form
app.get('/register', (req,res)=>{
    res.render('register')
});

app.post('/register', (req, res) =>{

    let pwd = bcrypt.hashSync(req.body.password,8);
    
    db.users.create({username:req.body.username, password:pwd })
    .then((result)=>{
        res.redirect('/login')
    })
})

app.get('/login', (req,res)=>{
    res.render('login')
});

// Verify Credentials
app.post('/login', passport.authenticate('local', {successRedirect: '/',
                                                    failureRedirect: '/login'}));


passport.use(new LocalStrategy((username, password, done)=>{
    // console.log('I am inside of local strategy')
    db.users.findAll({where: {username: username}})
    .then((res)=>{
        if(res != null){
            let data = res[0]

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

}))

//  Access Control
app.get('/', (req, res)=>{
    if(!req.isAuthenticated()){
        res.redirect('/register');
        return;
    }
    res.send('you are authenticated and you can see this page')
});

app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        req.logout();
        res.sendStatus(200);
    })
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
app.use(require('./routes/register'));

// Server Listening on Port 5000
app.listen(5000, () => {
    console.log('Listening on port 5000');
});