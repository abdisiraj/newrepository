const express = require('express');
const mysql = require('mysql');
const path = require('path');
const logger = require('./middleware/logger');
let cors = require("cors");
var fileupload = require("express-fileupload");
const res = require('express/lib/response');

const app = express();

app.use(fileupload());

app.use(cors());
//initialize middleware logger
//app.use(logger);  //not used only console log
//gets all members
//body parser middleware very crucial. without this there is no body parsing
app.use(express.json()); //this is to accept data in json format
app.use(express.urlencoded({ extended: false })); //this is to decode the data sent through html form


// set a static folder . use is used when we want to use a middleware
//(middlewares are functions which have access to req and res)
//app.use(express.static(path.join(__dirname, 'public')));  //not used


//members api routes
app.use('/api/members', require('./routes/api/members'));  //we call it like a middleware

//members all tables routes
//app.use('/all_tables/users', require('./routes/all_tables/users'));
app.use('/all_tables/users', require('./routes/all_tables/users'));



//var minutes = 0.1, the_interval = minutes * 60 * 1000;

//res.send("hello world");
app.get('/', (req, res) => { 
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server run on ${PORT}`));
