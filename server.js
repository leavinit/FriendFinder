var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;



var htmlRoutes = require("./app/routing/htmlroutes");
var apiRoutes = require("./app/routing/apiroutes");

app.use(htmlRoutes);
app.use(apiRoutes);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(PORT);
console.log("app listening on port "+PORT);