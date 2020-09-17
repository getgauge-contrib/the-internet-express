var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.name);
  res.render('submitted_form', {name: req.body.name});
});

module.exports = router;
