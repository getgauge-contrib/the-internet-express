var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

router.get('/', (_req, res) => {
  res.render('upload');
});

router.post('/', upload.single('file'), (req, res) => {
  if(!req.file)
    res.render('upload');
  else
    res.render('uploaded', {uploadedFile: req.file.originalname});
});

module.exports = router;
