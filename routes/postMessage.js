var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var messages = require('../models/messages.json');


router.post('/', function(req, res, next) {
    var messagesArray = messages;
    messagesArray.push(req.body);
    var file = path.join(__dirname, '../models/messages.json');

    fs.writeFile(file, JSON.stringify(messagesArray), function(err){
       if(err){
           console.log(err);
           res.sendStatus(500).send(err);
       } else {
           res.json(messagesArray);
       }
    });
});

module.exports = router;
