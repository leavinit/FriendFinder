var express = require('express');
var path = require("path");
var app = module.exports = express();  
var allFriends = require("../data/friends")
var fs = require("fs");
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


//utilty functions
function calculateBestFriend(friendIn){
    var greatestDiff = 0;
    var betterFriend = null;
    allFriends.forEach(function(friendTarget){
        var i = 0;
        var totalDiff = 0; //added up differences between the input person and the person being examined
        // console.log(friendTarget.name + " start loop");
        
        friendIn.scores.forEach(function(score){
            // var scoreDiff = score-friendTarget.scores[];
            var perScoreDiffAbs = Math.abs(score - friendTarget.scores[i]);
            totalDiff += perScoreDiffAbs; 
            // console.log(i+") friend in score: "  + score + " friend looking at score: "+friendTarget.scores[i]);
            // console.log(perScoreDiffAbs);
            
            i++;
        });
        console.log(friendTarget.name + " Aggregate Absolute Scole Difference : " + totalDiff);
        //calculate the new best friend, if theres a tie, the most recent added is selected
        if (totalDiff >= greatestDiff){
            betterFriend = friendTarget;
            greatestDiff = totalDiff;
            // console.log ("totalDiff: "+ totalDiff + " > greatestDiff: "+ greatestDiff);
            // console.log("new better friend is : "+betterFriend.name);
        }
        else{
            // console.log("no new friend: "+"totalDiff: "+ totalDiff + " > greatestDiff: "+ greatestDiff);    
        }
    });
    console.log('new best friend: '+betterFriend.name);
    return betterFriend;
}

/////Routes
app.get("/api/friends", function(req, res) {
    //used to display a json of all possible friends
    return res.json(allFriends);    
});
app.post("/api/friends",function(req,res){
    //route to add a new friend to the allFriends object when the user sends 
    // console.log(req.body);
    var newFriend = req.body;
    console.log("adding via /api/friends")
    console.log(newFriend);
    

    var bestFriend = calculateBestFriend(newFriend);
    allFriends.push(newFriend);
    // console.log("allfriends: " + allFriends);

    //build the html to be delivered to the user
    var infoForModal = ""
    infoForModal += "<h6>"+bestFriend.name+"</h6>"
    infoForModal += "<img src="+bestFriend.photo+ ">"
    //send it 
    res.send(infoForModal);
})

// app.post('/api/friends', function(req, res){
//     console.log("req.body: " + req.body);
//  res.send(req.body);
// });


  