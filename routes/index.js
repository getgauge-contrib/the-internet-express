var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const frameLayouts = ['top', 'bottom', 'left', 'right', 'middle'];

frameLayouts.forEach((l) => {
  router.get('/frame_' + l, (req, res) => {
    res.render('frame_' + l);
  });
});

router.get('/nested_frames', (req, res) => {
  res.render('nested_frames');
});

router.get('/frames', (req, res) => {
  res.render('frames');
});

router.get('/iframe', (req, res) => {
  res.render('tinymce');
});

router.get('/tinymce', (req, res) => {
  res.render('tinymce');
});

module.exports = router;
