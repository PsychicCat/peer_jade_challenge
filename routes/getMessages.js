var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var messages = require('../models/messages');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(messages);
});

module.exports = router;
