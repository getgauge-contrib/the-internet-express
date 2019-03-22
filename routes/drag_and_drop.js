var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('drag_and_drop');
});
  
module.exports = router;
