//jshint esversion: 6 
// REMOVE <ankit> from url and apis. Mailchimp doent allow API's to be posted on GitHub 

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

	const data = {

		members : [
			{
				email_address: email,
				status: "subscribed",
				merge_fields:{
					FNAME: firstName,
					LNAME: lastName
				}
			}
		]
	};

	const jsonData = JSON.stringify(data);

	const url = "https://us7.api.mailchimp.com/3.0/lists/5ceec917<ankit>2f";
	
	const options = {
		method: "POST",
		auth: "ankit:fe36518e817<ankit>7c36e1c93e2c2430a2383-us7"
	}

	const request = https.request(url, options, function(response){


		if(response.statusCode === 200){
			res.sendFile(__dirname + "/success.html");
		}else{
			res.sendFile(__dirname + "/failure.html");
		}

		response.on("data", function(data){
			console.log(JSON.parse(data));
		});

	});

	request.write(jsonData);
	request.end();




});

	

app.listen(3000, function(){
	console.log("Server running on port 3000");
});

// listid = 5ceec9172f


// remove "<ankit>" from api = fe36518e8177<ankit>c36e1c93e2c<ankit>2430a2383-us7
































