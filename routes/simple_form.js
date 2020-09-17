var express = require('express');
var router = express.Router();

router.get('/', (_req, res) => {
  res.render('simple_form');
});

module.exports = router;
