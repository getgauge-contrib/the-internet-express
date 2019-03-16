var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('horizontal_slider');
});

module.exports = router;