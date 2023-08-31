//Express Library
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

//port is an inbuilt programming interaface of class URL withing the url module is used to get and set the port portion of URL
const port = process.env.PORT || 5000;

// we need to fireup express server to get all the functionality of express usually name is app
const app = express();

//path 
const path = require('path');

// connection to mongodb 
const db = require('./config/mongoose');

const multer = require('multer');

app.use(expressLayouts);

//set up view engine
app.set('view engine' , 'ejs');
app.set('views' , "./views");

// routes connect in csvRoutes
app.use('/' , require('./routes/csvRoutes'));

// listen on port or the function is cementically on the port 5500
app.listen(port , (err) => {
    if(err) {
        console.log(`Error in listing on the port ${err}`);
    }
    console.log(`Server is running successfully on the port : ${port}`);
});