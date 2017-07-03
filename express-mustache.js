const express = require('express');
const mustacheExpress = require('mustache-express');

const data = require("./data.js"); // looks for data in the dir...don't have to specify data.js
const app = express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());  // template engine
app.set('views', './views')
app.set('view engine', 'mustache')


// TODO put your routes here
app.get('/', function (req, res) {
  res.render('index', {users: data.users}); // gather user data for the index page
});

app.get('/:username', function (req, res) { // path to display individual user info
  var user = data.users.find(function(x) {
    return x.username === req.params.username
  });
  res.render('robots', {user: user});
});

app.listen(3000, function () {
  console.log('Express-mustache-robot application listening on port 3000!');
})