const express = require('express');
const mustacheExpress = require('mustache-express');

const data = require("./data");
const app = express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// TODO put your routes here
app.get('/', function (req, res) {
  res.render('index', {users: data.users});
});

app.listen(3000, function () {
  console.log('Successfully started express-mustache application!');
})