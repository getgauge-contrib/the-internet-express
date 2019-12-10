var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('windows');
});

router.get('/new', (req, res, next) => {
  res.render('new_window');
});

module.exports = router;
