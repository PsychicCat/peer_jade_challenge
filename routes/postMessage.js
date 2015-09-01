var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.post('/', function(req, res, next) {
    console.log(req.body);
    var newId = req.body.id;
    var newMessage = req.body.message;
    var file = path.join(__dirname, '../models/messages.json');

    fs.readFile(file, 'utf8', function(err, data){
        if (err) {
            next(err);
        } else {
            if(data){
                var obj = JSON.parse(data);
            }else {
                var obj = [];
            }
            obj.push({"message": newMessage, "id": newId});

            fs.writeFile(file, JSON.stringify(obj), function(err){
                if (err) {
                    throw err;
                } else {
                    console.log('Wrote Data!');
                }
            });
            res.send(obj);
        }
    })
});

module.exports = router;
