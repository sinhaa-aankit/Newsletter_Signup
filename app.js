//

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));








app.listen(3000, function(){
	console.log("Server running on port 3000");
});