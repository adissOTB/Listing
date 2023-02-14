//import modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var { token } = require('morgan');
var port = process.env.PORT || 8080;
var route = require('./routes/routes');
mongoose.set('strictQuery', false);
var cors = require('cors');
var path = require('path');


//database connection
mongoose.connect('mongodb://localhost:27017/Dataregistry', function() {
    if(mongoose){
        console.log('Database successfully connected!!');
    } else {
        console.log('Unable to connect to the Database');
    }
});

//adding and using middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/pages')); 
app.use('/api', route);
app.use(cors());


//root 
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

//port: https://localhost:8080/
app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
})