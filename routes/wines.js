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

exports.addRecord = function(req, res) {
  console.log('Inserting restaurant: ');
  db.collection('restaurants', function(err, collection) {
    collection.insertOne({"_id":"980b6b5414bedce366a46c01","address":{"building":"469","coord":[-73.961704,40.662942],"street":"Flatbush Avenue","zipcode":"11225"},"borough":"Brooklyn","cuisine":"Hamburgers","grades":[{"date":"2014-12-30T00:00:00.000Z","grade":"A","score":8},{"date":"2014-07-01T00:00:00.000Z","grade":"B","score":23},{"date":"2013-04-30T00:00:00.000Z","grade":"A","score":12},{"date":"2012-05-08T00:00:00.000Z","grade":"A","score":12}],"name":"Wendy'S","restaurant_id":"30112340"},
        function(err, item) {
      res.send(item);
    });
  });
};

