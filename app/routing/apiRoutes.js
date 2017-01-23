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
    
  })

}
