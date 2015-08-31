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
            res.render('memes', {meme: memes});
        }

    });
});

module.exports = router;
