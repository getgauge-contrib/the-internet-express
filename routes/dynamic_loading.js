var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('dynamic_loading');
});

router.get('/1', (req, res, next) => {
  res.render('dynamic_loading_1');
});

router.get('/2', (req, res, next) => {
  res.render('dynamic_loading_2');
});
  
module.exports = router;
