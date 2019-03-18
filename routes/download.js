var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', (_req, res) => {
  var fileNames = fs.readdirSync(path.join(__dirname, '..', 'public', 'uploads'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name !== '.gitkeep')
    .map(dirent => dirent.name);
  res.render('download', {files: fileNames});
});
  
router.get('/:filename', (req, res) => {
  res.download(path.join(__dirname, '..', 'public','uploads', req.params['filename']));
});

router.get('/jqueryui/menu/:filename', (req, res) => {
  res.download(path.join(__dirname, '..', 'public','uploads','jqueryui','menu') + req.params['filename']);
});
  
module.exports = router;