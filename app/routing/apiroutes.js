var express = require('express');
var path = require("path");
var app = module.exports = express();  
var allFriends = require("../data/friends")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// var allFriends =
// [
//     {
//         "name":"Ahmed",
//         "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         "scores":[
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1]
//     }
// ]; 

app.get("/api/friends", function(req, res) {
    //used to display a json of all possible friends
    return res.json(allFriends);    
});
app.post("/api/friends",function(req,res){
    //route to add a new friend to the allFriends object when the user sends 
    console.log(req.body);
    var newFriend = req.body;
    console.log("adding via /api/friends(?)")
    console.log(newFriend);
    res.send(req.body);
})

// app.post('/api/friends', function(req, res){
//     console.log("req.body: " + req.body);
//  res.send(req.body);
// });


  