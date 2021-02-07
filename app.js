//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
 res.sendFile(__dirname + "/signup.html");
});
	

app.listen(3000, function(){
	console.log("Server running on port 3000");
});



































