// Require Express
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views')

// app.use(require('./routes/index'))

// Server Listening on Port 5000
app.listen(5000, ()=>{
    console.log('Listening on port 5000');
});