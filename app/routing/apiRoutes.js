//===============================================================load data. We are linking our routes to a series of "data" sources. These data sources hold arrays of information on friends data.
//================================================================
var friendsData = require("../data/friends.js");

module.exports = function(app){
  //API GET Requests
  //handles when users "visit" page.
  //In each of the below when a use visits a linking

  app.get("/api/friends",function(req,res){
    res.json(friendsData);
  });

  //API POST requests.
  //below code handles when a user submits a form and thus submits data to the server.
  //In each of the below cases, when a use submits form data( a JSON object)
  // ...the JSON is pushed to the appropriate javascript array
  app.post("/api/friends", function(req,res){
    // console.log(req.body.scores);
    var newFriend = req.body;
    var newFriendScore =[];


   //change score of strings into numbers
    for(var i = 0; i < newFriend.scores.length;i++){
      newFriendScore[i] = parseInt(newFriend.scores[i]);
    }

    // console.log(newFriendScore);
    var differenceArr = [];
    var minIndex = 0;
    //looping through all the friends that has saved in friends.js
    for (var i = 0; i <friendsData.length; i++){
      var comparingFriend = friendsData[i];
      var totalDiff = 0;
      var totalDiffArr = [];

    //looping one selected friend from friend.js and looping trough his or her scores.
      for(var j = 0; j < comparingFriend.scores.length; j++){
       var eachDiffScore = Math.abs((parseInt(newFriendScore[j]) - parseInt(comparingFriend.scores[j])));
       totalDiff += eachDiffScore;

      }

      totalDiffArr.push(parseInt(totalDiff));
      //comparing score through array of total diff.
      if(i > 0){
        if(totalDiffArr[minIndex]>totalDiffArr[i]){
          minIndex = i;
        }
      }


    }
    //pick a friends who has the minimum score difference, and send response to display who.
    res.json(friendsData[minIndex]);
    //storing to friend.js the new added friend.
    friendsData.push(newFriend);


  })

  //This code can ceear out the friendsData while working with the functionallity.
  // app.post('/api/clear', function(req, res) {
  //     // Empty out the arrays of data
  //     friendsData = [];
  //
  //
  //     console.log(friendsData);
  // });



}
