var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var fileUpload = require('express-fileupload');

var index = require('./routes/index');
var users = require('./routes/users');
//var profile = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));




app.post('/productSave', function(req, res){
          
 
            if (!req.files) {
                res.send('No files were uploaded.');
                return;
            }
            else
            {
              var product = new index.productData();

              product.name = req.body.pname;
              product.description = req.body.pdsc;
              product.condition = req.body.condition;
                product.efas = req.body.efas;
                product.ecat = req.body.ecat;
                product.esta = req.body.esta;
              product.email = req.cookies['email'];

                       product.save(function(err, savedObject){

                    if(err)
                    {
                      res.end("error connecting the mongoDB");
                      console.log(err);
                    }
                    else
                    {
                      
                      var sampleFile;
           
                      if (!req.files) {
                          res.send('No files were uploaded.');
                          return;
                      }
                   
                      sampleFile = req.files.pimgg;
                      var path = 'public/uploadedImages/'+savedObject.id+".png";
                      sampleFile.mv(path, function(err) {
                          if (err) {
                              res.status(500).send(err);
                          }
                          else {
                              res.render('upload3',{xx:'Product has been successfully <strong>saved</strong>!'})
                          }
                      });
                        
                      
                      
                    }

                  });

            }
            

});



app.get('/products',function (req,res,next) {

    if(req.cookies['email'] && req.cookies['id']) {


        index.productData.find({email:req.cookies['email']}, function(err, foundData){

            if(foundData.length!=0) {

                var pimg = [''];
                var pname = [''];
                var pcond = [''];
                var pdsc = [''];
                var pemail = [''];
                var id = [''];
                var efas = [''];
                var esta = [''];
                var ecat = [''];

                for (var i = 0; i < foundData.length; i++) {
                    pimg[i] = '/uploadedImages/' + foundData[i].id + '.png';
                    pname[i] = foundData[i].name;
                    pcond[i] = foundData[i].condition;
                    pdsc[i] = foundData[i].description;
                    pemail[i] = foundData[i].email;
                    id[i] = foundData[i].id;
                    efas[i]= foundData[i].efas;
                    ecat[i]= foundData[i].ecat;
                    esta[i]= foundData[i].esta;


                }

                res.render('products', {

                    'pimg': pimg,
                    'pname': pname,
                    'pcond': pcond,
                    'pdsc': pdsc,
                    'pemail': pemail,
                    'id': id,
                    'efas':efas,
                    'ecat':ecat,
                    'esta':esta
                });
            }
            else
            {
                res.render('products2');
            }
        });


    }
    else
    {
        res.render('loginAgain',{xx:'To view this page you need to be logged in!'});
    }

});

app.post('/delete',function (req,res,next) {
    var id=req.body.idd;
    index.productData.findByIdAndRemove(id).exec();
    res.redirect('/products');

});








app.use('/', index);
//app.use('/login',index);
app.use('/users', users);
//app.use('/profile',profile);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
