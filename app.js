//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");

app.use(bodyParser.urlencoded({extended: true}));








app.listen(3000, function(){
	console.log("Server running on port 3000");
});