var util = require('util');


var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    ObjectID = require('mongodb').ObjectID;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('test', server);

db.open(function(err, db) {
  if(!err) {
    console.log("Connected to 'test' database");
    db.collection('restaurants', {strict:true}, function(err, collection) {
      if (err) {
        console.log("The 'restaurants' collection doesn't exist.");
      }
    });
  }
});

exports.findAll = function(req, res) {
  console.log('Retrieving all restaurants');
  db.collection('restaurants', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.send(items);
    });
  });
};