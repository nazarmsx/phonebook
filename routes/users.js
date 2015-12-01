var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/data');

var contactSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
 phone: String,
 comment:String,
 image:String
});

var userSchema = new mongoose.Schema({
 login: String,
 password: String,
 contacts:[contactSchema]
});

var contacts = mongoose.model('contact', contactSchema);
var users = mongoose.model('user', userSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
 users.find(function (err, todos) {
  if (err) return next(err);
  res.json(todos);
 });
});

router.post('/', function(req, res, next) {

 users.create(req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});

router.get('/:id', function(req, res, next) { //get user by id
 users.findById(req.params.id, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});

router.post('/contact/:id', function(req, res, next) { //add contact to user

 users.findById(req.params.id, function (err, post) {


  if (err) return next(err);
  post.contacts.push(req.body);
  post.save(function (err) {
   if (err) return next(err);
   res.json(post);
  });

 });
});

router.put('/contact/:id', function(req, res, next) { //update contact to user
 //res.writeHead(200, {"Content-Type": "application/json"});
 users.findById(req.params.id, function (err, post) {

  if (err) return next(err);


  var set = {};
  for (var field in req.body) {
   set['contacts.$.' + field] = req.body[field];
  }

  users.update({_id: req.params.id, "contacts._id": req.body._id},
      {$set: set},
      function(err, numAffected) {

       res.json(req.body);

      });


 });
 return;
});

router.delete('/:id/:contact_id', function(req, res, next) {
 users.findById(req.params.id, function (err, post) {

  if (err) return next(err);
  //console.log(req.body);
  var doc = post.contacts.id(req.params.contact_id).remove();


  //console.log(doc);
  post.save(function (err) {
   if (err) return next(err);
   res.json( post);
  });
 });


});


router.get('/user/:login', function(req, res, next) {
 users.find({login:req.params.login}, function (err, post) {
  if (err) return next(err);
  res.json(post);
 });
});



router.put('/:id', function(req, res, next) {
 contacts.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
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
