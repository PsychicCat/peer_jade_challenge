var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var messages = require('../models/messages');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var file = path.join(__dirname, '../models/messages.json');

    fs.readFile(file, 'utf8', function(err, data){
       if(err){
           next(err);
       } else{
           var obj = JSON.parse(data);
           res.send(obj);
       }
    });
});

module.exports = router;
