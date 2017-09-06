//Dependency
var path = require('path');
//route
module.exports = function(app) {

    //GET request 
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../app/public/survey.html'));
    });

    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../app/public/home.html'));
    });

}