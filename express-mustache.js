const express = require('express');
const mustacheExpress = require('mustache-express');

const data = require("./data.js"); // looks for data in the dir...don't have to specify data.js
const app = express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());  // templating engine
app.set('views', './views')
app.set('view engine', 'mustache')


// TODO put your routes here
app.get('/', function (req, res) {
  res.render('index', {users: data.users}); // gather user data for the index page
});

//app.get('/:username', function (req, res) { // path to get all individual user info
//  var userProfile = data.users.find(function(x) {
//    return x.username === req.params.username
//  });
//  res.render('robots', userProfile);
//});

app.listen(3000, function () {
  console.log('Successfully started express-mustache application!');
})