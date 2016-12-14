var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://adhik97:creatives1@ds133338.mlab.com:33338/tradeup');
var fs = require('fs');

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  name: String,
  email: String,
  pas: String,
  age: String,
  add: String,
  num: String
});

var productSchema = new Schema({
  name: String,
  description: String,
  condition: String,
  email: String,
  efas: String,
  ecat: String,
  esta: String
});

var schema = new Schema({
  img: { data: Buffer, contentType: String }
});

var A = mongoose.model('A', schema);




var UserData = mongoose.model('UserData', userDataSchema);
var productData = mongoose.model('productData', productSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies['email'] && req.cookies['id'])
  {
    res.redirect('/home');
  }
  else {
    res.render('index', {title: 'Express', xx: ''});
  }
});



router.get('/home',function (req,res,next) {
  if(req.cookies['email'] && req.cookies['id']) {
    

    productData.find({}, function(err, foundData){

      if(foundData.length!=0) {

        var pimg = [''];
        var pname = [''];
        var pcond = [''];
        var pdsc = [''];
        var pemail = [''];


        for (var i = 0; i < foundData.length; i++) {
          pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
          pname[i] = foundData[i].name;
          pcond[i] = foundData[i].condition;
          pdsc[i] = foundData[i].description;
          pemail[i] = foundData[i].email;

        }

        res.render('home', {

          'pimg': pimg,
          'pname': pname,
          'pcond': pcond,
          'pdsc': pdsc,
          'pemail': pemail
        });
      }
      else
      {
        res.render('home2');
      }
    });


  }
  else
  {
    res.render('loginAgain',{xx:'To view this page you need to be logged in!'});
  }
})

router.post('/filter',function (req,res,next) {
    if(req.cookies['email'] && req.cookies['id']) {

        if (req.body.condition == 'New') {
            productData.find({condition: 'New'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });


        }
        else if (req.body.condition == 'Used') {
            productData.find({condition: 'Used'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.condition == 'Used' && req.body.efas == 'efas') {
            productData.find({condition: 'Used', efas: 'efas'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.condition == 'New' && req.body.efas == 'efas') {
            productData.find({condition: 'New', efas: 'efas'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.condition == 'Used' && req.body.esta == 'esta') {
            productData.find({condition: 'Used', esta: 'esta'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.condition == 'New' && req.body.esta == 'esta') {
            productData.find({condition: 'New', esta: 'esta'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.condition == 'Used' && req.body.ecat == 'ecat') {
            productData.find({condition: 'Used', esta: 'ecat'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.condition == 'New' && req.body.ecat == 'ecat') {
            productData.find({condition: 'New', efas: 'ecat'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });

        }
        else if (req.body.efas == 'efas') {
            productData.find({efas: 'efas'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });


        }
        else if (req.body.ecat == 'ecat') {
            productData.find({ecat: 'ecat'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });


        }
        else if (req.body.esta == 'esta') {
            productData.find({esta: 'esta'}, function (err, foundData) {

                if (foundData.length != 0) {

                    var pimg = [''];
                    var pname = [''];
                    var pcond = [''];
                    var pdsc = [''];
                    var pemail = [''];


                    for (var i = 0; i < foundData.length; i++) {
                        pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                        pname[i] = foundData[i].name;
                        pcond[i] = foundData[i].condition;
                        pdsc[i] = foundData[i].description;
                        pemail[i] = foundData[i].email;

                    }

                    res.render('home', {

                        'pimg': pimg,
                        'pname': pname,
                        'pcond': pcond,
                        'pdsc': pdsc,
                        'pemail': pemail
                    });
                }
                else {
                    res.render('home2');
                }
            });


        }
        else
        {
            res.redirect('/home');
        }

    }
        else {
            res.render('loginAgain', {xx: 'To view this page you need to be logged in!'});
        }

});






router.get('/register',function(req, res, next){
  res.render('register',{xx: ''});
});

router.post('/registerSubmit',function (req, res, next) {
  var user={
    name: req.body.user_name,
    email: req.body.user_email,
    pas: req.body.user_password,
    age: req.body.user_age,
    add: req.body.user_add,
    num: req.body.phno
  };
  console.log(user);
  var cpas=req.body.user_cpassword;


  if(user.name=='' ||  user.email=='' || user.pas=='' || cpas=='' || user.add=='' || user.age=='' || user.num=='')
  {
    res.render('registerDanger',{ xx:'Fill all the fields!'});
  }
    else if(user.age < 13)
  {
    res.render('registerDanger',{ xx:'You need to atleast 13 to register!'});
  }
  else if (cpas != user.pas)
  {
    res.render('registerDanger',{ xx:'Please check your password again,they are not same :('});
  }
  else
  {
    var data = new UserData(user);
    data.save();
    console.log("Saved succesfully");
    res.render('registerSuccess',{ xx:'Registered Successfully'});
  }
});

router.post('/signin',function (req, res, next) {
  var email=req.body.lemail ;
  if(req.body.lemail == '' || req.body.lpass == '')
  {
    res.render('index2', {title: 'Express', xx: 'Fill all the details!'});
  }
  UserData.findOne({'email':email},function(err,doc){
    if(err)
    {
      res.render('index2', { title: 'Express',xx:'Please try again with proper data!'});
    }
    if(doc) {
      if (doc.pas != req.body.lpass) {
        res.render('index2', {title: 'Express', xx: 'Wrong Password! Please try again'});
      }
      else {

        res.cookie('email', doc.email, { maxAge: 90000000, httpOnly: true });
        res.cookie('id', doc._id, { maxAge: 90000000, httpOnly: true });
        res.redirect('/home');

      }
    }
      else
      {
        res.render('index2', { title: 'Express',xx:'The user does not exist!'});
      }

  });
});

router.get('/signout',function (req,res,next) {
  if(req.cookies['email'] != '' && req.cookies['id']) {
    res.clearCookie('email');
    res.clearCookie('id');
    res.render('loginAgain',{xx:'You have successfully logged out. Come back Soon :)'});

  }
  else
  {
    res.render('loginAgain',{xx:'You are not logged in to sign out'});
  }
});


router.get('/profile', function(req, res, next) {
  if(req.cookies['email'] && req.cookies['id']) {

    UserData.findById(req.cookies['id'],function(err,doc){
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

router.post('/save',function (req, res, next) {
  UserData.findById(req.cookies['id'],function(err,doc){
    if(err)
    {
      res.redirect('/profile');
    }
    if(doc) {

      doc.name = req.body.name;
      doc.add = req.body.add;
      doc.num = req.body.num;
      doc.save();
      res.redirect('/profile');
    }
  });




});

router.get('/upload',function (req,res,next) {
  res.render('upload2');
});



module.exports = router;
module.exports.productData = productData;
