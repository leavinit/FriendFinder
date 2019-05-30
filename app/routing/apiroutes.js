var express = require('express');
var path = require("path");
var app = module.exports = express();  


var friends =
[
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1]
    }
]; 

app.get("/api/friends", function(req, res) {
    //used to display a json of all possible friends
    return res.json(friends);    
});
app.post("/api/friends",function(req,res){

});
//other routes..

  