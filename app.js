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

	const firstName = req.body.fName;
	const lastName = req.body.lName;
	const email = req.body.Email;

	var data = {

		members : {
			email_address: email,
			status: "subscribed",
			merge_fields:{
				FNAME: firstName,
				LNAME: lastName
			}
		}
		
	}


});

	

app.listen(3000, function(){
	console.log("Server running on port 3000");
});

//var apiKey = "3b6e69e4dc72925458d2a79a582290ad-us7";



































