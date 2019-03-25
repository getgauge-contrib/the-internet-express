var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('drag_and_drop');
});

router.get('/oldschool', (req, res, next) => {
  res.render('drag_and_drop_oldschool');
});
  
module.exports = router;
