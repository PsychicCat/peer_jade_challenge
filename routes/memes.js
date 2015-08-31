var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var memes = require('../models/images');
var messages = require('../models/messages');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('memes', {memes: memes, messages: messages})
});

module.exports = router;

