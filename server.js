var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;


var htmlRoutes = require("./app/routing/htmlroutes");
var apiRoutes = require("./app/routing/apiroutes");

app.use(htmlRoutes);
app.use(apiRoutes);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(3000);
console.log("app listening on port 3000");