var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router.get('/qw', function(req, res, next) {
//  res.render('partials/' + req.params.name)
//});
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//var MongoClient = require('mongodb').MongoClient
//    , assert = require('assert');
//
//// Connection URL
//var url = 'mongodb://localhost:27017/notebook';
//// Use connect method to connect to the Server
//MongoClient.connect(url, function(err, db) {
//  assert.equal(null, err);
//  console.log("Connected correctly to server");
//
//  insertDocuments(db, function() {
//
//    findDocuments(db, function() {
//      db.close();
//    });
//  });
//
//});
//
//
//var insertDocuments = function(db, callback) {
//  // Get the documents collection
//  var collection = db.collection('documents');
//  // Insert some documents
//  collection.insertMany([
//    {a : 1}, {a : 2}, {a : 3}
//  ], function(err, result) {
//
//    console.log("Inserted 3 documents into the document collection");
//    callback(result);
//  });
//}
//
//var findDocuments = function(db, callback) {
//  // Get the documents collection
//  var collection = db.collection('documents');
//  // Find some documents
//  collection.find({}).toArray(function(err, docs) {
//    //assert.equal(err, null);
//   // assert.equal(2, docs.length);
//    console.log("Found the following records");
//    console.dir(docs);
//    callback(docs);
//  });
//}
module.exports = router;
