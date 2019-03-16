var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('windows');
});

router.get('/new', function(req, res, next) {
  res.render('new_window');
});
  
module.exports = router;
