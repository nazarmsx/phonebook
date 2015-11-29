var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/data');

var TodoSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
 phone: String,
 comment:String
});

var Todo = mongoose.model('contact', TodoSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
 Todo.find(function (err, todos) {
  if (err) return next(err);
  res.json(todos);
 });
});

router.post('/', function(req, res, next) {

 Todo.create(req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});


router.get('/:id', function(req, res, next) {
 Todo.findById(req.params.id, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});

router.put('/:id', function(req, res, next) {
 Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});

router.delete('/:id', function(req, res, next) {
 Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});













router.get('/contact', function(req, res, next) {
 res.end('sdsd');
});

router.get('/contact/:id', function(req, res, next) {
 res.end('sdsd');
});


//var MongoClient = require('mongodb').MongoClient
//    , assert = require('assert');
//
//// Connection URL
//var url = 'mongodb://127.0.0.1:27017/notebook';
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
