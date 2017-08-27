//require the friends data file
var friends = require('../app/data/friends.js');

//Routes
module.exports = function(app) {

    // API GET Requests
    app.get('./api/friends', function(req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post('./api/friends', function(req, res) {

        //Comparing user with their best friend match 

        //Object to hold the best match
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // Here we take the result of the user's survey POST and parse it.
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDifference = 0;

        // Loop through all the friend possibilities in the database. 
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            // Loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }


        // Save user data to database
        friends.push(userData);

        // Return a JSON with the user's bestMatch.  
        res.json(bestMatch);

    });

}