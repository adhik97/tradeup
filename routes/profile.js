var express = require('express');
var router = express.Router();
var index = require('./index');







router.get('/', function(req, res, next) {
    if(req.cookies['email'] && req.cookies['id']) {

        index.UserData.find({email:req.cookies['email']},function(err,doc){
            if(err)
            {
                res.render('profile', { title: 'Express'});
            }
            if(doc) {
                res.render('profile', {title: 'Express', data: doc});
            }
        });
    }
    else
    {
        res.render('loginAgain',{xx:'To view this page you need to be logged in!'});
    }
});


module.exports = router;
