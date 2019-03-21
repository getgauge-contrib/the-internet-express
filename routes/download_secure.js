var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var isAuthenticated = (req, res, next) => {
  if(req.user && req.user.authenticated) {
    return next()
  } else {
    res.locals.message = 'Unauthorized';
    res.locals.error = {status: 401};
    res.status(401);
    res.render('error');
  }
};

router.get('/', isAuthenticated, (req, res) => {
  var fileNames = fs.readdirSync(path.join(__dirname, '..', 'public','uploads'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name !== '.gitkeep')
    .map(dirent => dirent.name);
  res.render('download', {files: fileNames});
});
  
router.get('/:filename', isAuthenticated, (req, res) => {
  res.download(path.join(__dirname, '..', 'public','uploads', req.params['filename']));
});
  
router.get('/jqueryui/menu/:filename', isAuthenticated, (req, res) => {
  res.download(path.join(__dirname, '..', 'public','uploads', 'jqueryui', 'menu', req.params['filename']));
});
  
module.exports = router;