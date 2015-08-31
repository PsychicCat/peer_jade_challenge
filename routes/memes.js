var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var file = path.join(__dirname, '../models/images.json');
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            next(err);
        } else {
            var memes = JSON.parse(data);
            var memeObject = {meme: memes};
            res.render('memes', memeObject);
        }

    });
    var file2 = path.join(__dirname, '../models/messages.json');
    fs.readFile(file2, 'utf8', function (err, data) {
        if (err) {
            next(err);
        } else {
            console.log(data);
            var messages = JSON.parse(data);
            var memeObject.messages = messages
            res.render('memes', {message: messages});
        }

    });
});
//router.get('/', function(req, res, next){
    //var file = path.join(__dirname, '../models/messages.json');
    //fs.readFile(file, 'utf8', function(err, data){
    //    if(err){
    //        next(err);
    //    }else{
    //        var messages = JSON.parse(data);
    //        res.render('memes', {message: messages})
    //    }

//    });
//
//});
module.exports = router;
