var express = require('express');
var router = express.Router();

exports.partials = function(req, res) {
  //res.render('error');
  res.render('partials/' + req.params.name,{ layout: false});
};
exports.index = function(req, res){
  res.render('error');
};
//router.get('/temp', function(req, res, next) {
//  res.end('Phonebook: Home' );
//});
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('layout', { title: 'Phonebook: Home' });
//});
//
////module.exports = router;
//exports.index = function(req, res){
//  res.render('layout');
//};
//

