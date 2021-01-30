var express = require('express');
var bodyParser = require('body-parser')
const app = express(); 
const port = 4000; 

app.get('/', function(req, res){
    res.send("Hello World");
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})