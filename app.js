var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer  = require('multer')
var fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public','uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var isAuthenticated = (req, res, next) => {
  if(req.user && req.user.authenticated) {
    return next()
  } else {
    res.locals.message = 'Unauthorized';
    res.locals.error = {status: 401};
    res.status(401);
    res.render('error');
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/upload', (_req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('file'), (req, res) => {
  if(!req.file)
    res.render('upload');
  else
    res.render('uploaded', {uploadedFile: req.file.originalname});
});

app.get('/download', (_req, res) => {
  var fileNames = fs.readdirSync(path.join(__dirname, 'public','uploads'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name !== '.gitkeep')
    .map(dirent => dirent.name);
  res.render('download', {files: fileNames});
});

app.get('/download/:filename', (req, res) => {
  res.download(path.join(__dirname, 'public','uploads', req.params['filename']));
});

app.get('/download/jqueryui/menu/:filename', (req, res) => {
  res.download(path.join(__dirname, 'public','uploads','jqueryui','menu') + req.params['filename']);
});

app.get('/download_secure', isAuthenticated, (req, res) => {
  var fileNames = fs.readdirSync(path.join(__dirname, 'public','uploads'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name !== '.gitkeep')
    .map(dirent => dirent.name);
  res.render('download', {files: fileNames});
});

app.get('/download_secure/:filename', (req, res) => {
  res.download(path.join(__dirname, 'public','uploads', req.params['filename']));
});

app.get('/download_secure/jqueryui/menu/:filename', isAuthenticated, (req, res) => {
  res.download(path.join(__dirname, 'public','uploads', 'jqueryui', 'menu', req.params['filename']));
});

app.get('/horizontal_slider', (req, res) => {
  res.render('horizontal_slider');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
