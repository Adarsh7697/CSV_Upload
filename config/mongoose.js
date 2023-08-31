// require the library
const mongoose = require('mongoose');

// connecting to the database

mongoose.connect(process.env.MONGURL);
// mongoose.connect('mongodb://127.0.0.1/csv_upload');

// accquiring the connection to check if it is successful
const db = mongoose.connection;

//checking for the error
db.on('error' , console.log.bind(console , "Error in Connecting to MongoDB"));

//up and running then print the statement
db.once('open' , () => {
    console.log("Connected to the DataBase");
});

//exporting the connection
module.exports = db;