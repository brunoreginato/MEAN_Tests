var express = require('express');

var app = express();
var port = process.env.port || 3000;

app.get('/',function(req,res){
    res.send("<h1>Welcome to my API!</h1>");
});

app.listen(port,function(){
    console.log("SERVER IS LISTENING TO THE PORT: "+port)
});