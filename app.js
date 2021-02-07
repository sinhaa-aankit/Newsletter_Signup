//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/", function(req, res){
 res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){

	var firstName = req.body.fName;
	var lastName = req.body.lName;
	var email = req.body.Email;

	

});

	

app.listen(3000, function(){
	console.log("Server running on port 3000");
});

//var apiKey = "3b6e69e4dc72925458d2a79a582290ad-us7";



































