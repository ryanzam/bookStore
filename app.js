var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favi = require('serve-favicon');
var logger = require('morgan');

var books = require("./routes/book");

//mongoose
var mongoose = require('mongoose');
var bluebird = require('bluebird');



var port = 3000;

var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(logger('dev'));

//static folder "client" 
app.use('/books', express.static(path.join(__dirname, 'client')));

app.use('/book', books)

//start server

app.listen(port, function(){
    console.log("Server started : " + port)
});


//mongodb
mongoose.Promise = bluebird
mongoose.connect('mongodb://127.0.0.1/bookStore', {
    useMongoClient: true})
        .then( ()=> console.log('connected!'))
        .catch( (e) => console.error(e));
