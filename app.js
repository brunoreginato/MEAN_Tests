var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var db = mongoose.connect('mongodb://localhost/TrulyChat');

var Person = require('./Models/Person');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var personRouter = express.Router();
personRouter.route("/Person")
    .get(function(req,res){
        Person.find(function(err,people){
            if(err)
                res.json(err);
            else
                res.json(people);
        });
    });

app.use('/api',personRouter);

app.get('/',function(req,res){
    res.send("<h1>Welcome to my API!</h1>");
});

app.listen(process.env.PORT, function() {
    console.log("Server is listen the port: " + process.env.PORT);
});