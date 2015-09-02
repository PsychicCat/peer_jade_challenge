var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var memes = [{"something" : "doesn't matter"}];
  res.render('index', {memes: memes})
});

module.exports = router;
