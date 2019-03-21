var express = require('express');
var router = express.Router();
var authenticated = (req, res, next) => {
  const auth = {login: 'admin', password: 'admin'};
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');
  if (!login || !password || login !== auth.login || password !== auth.password) {
    res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
    res.status(401).send('Not authorized\n');
    return;
  }
  next();
};

router.get('/', authenticated, function(req, res, next) {
  res.render('basic_auth');
});

module.exports = router;
