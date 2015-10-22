var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var levelup = require('levelup');
var sublevel = require('level-sublevel');
var app = express();

app.use(express.static(__dirname));
//app.set('views', __dirname + '/');
app.set('view engine', 'html');

// Database Initialization
var db = sublevel(levelup('./db', {
  db: require('leveldown'),
  valueEncoding: 'json'
}));

function getUsers() {
  cb();
}

var usersdb = db.sublevel('users');
var postsdb = db.sublevel('posts');

// Static Routes
app.get('/', function (req, res) {
  res.render('index', function(err, html) {
    res.send(html);
  });
});


// API routes
app.get('/api/users', function(req, res) {
  usersdb.get('users', function(err, data) {
    console.log(data);
  });
});

app.post('/api/users', function(req, res) {
  usersdb.get('users', function(err, users) {

    var updatedUsers = users.filter(function(user) {
      return user.name !== req.body.user.name;
    });

    if (updatedUsers.length === users.length) {
      updatedUsers.push(req.body.user);
    } else {
      // err
    }

    usersdb.put('users', updatedUsers, function(err) {
      if (err) { return console.log('error updating users') }
    });
  });
});

app.put('/api/users', function(req, res) {
  usersdb.get('users', function(err, users) {
    var updatedUsers = users.map(function(user) {
      return (user.name !== req.body.user.name) ? user : req.body.user.name;
    });
    usersdb.put('users', updatedUsers, function(err) {
      if (err) { return console.log('error updating users') }
    });
  })
});

app.delete('/api/users', function(req, res) {

});

app.get('/api/posts', function(req, res) {
  postsdb.get('users', function(err, data) {
    console.log(data);
  });
});

app.post('/api/posts', function(req, res) {

});

app.put('/api/posts', function(req, res) {

});

app.delete('/api/posts', function(req, res) {

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host, port);

  console.log('Example app listening at http://%s:%s', host, port);
});
