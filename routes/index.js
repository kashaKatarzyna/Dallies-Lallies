var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({secret: 'myLittleSecret'});
var passport = require('passport');

var fs = require('fs');
var path = require('path');
var Base64Decode = require('base64-stream').decode;
var multer = require('multer');
var watson = require('watson-developer-cloud');

require('../config/passport');

var User = require('../models/Users');
var Flower = require('../models/Flower');


router.post('/register', function(req, res, next){
console.log(req.body);

  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)
console.log(user);
  user.save(function (err){
    if(err){return next(err); }
console.log("im an error");
    return res.json({token: user.generateJWT()})
  });
});



router.post('/login', function(req, res, next){
  console.log(req.body);
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});


router.param('currentUser', function (req, res, next, id) {
  var query = User.findById(id);

  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('can\'t find user')); }

    req.currentUser = user;
    return next();
  });
});


// PICTURE UPLOAD
var visual_recognition = watson.visual_recognition({
  url: 'https://gateway-a.watsonplatform.net/visual-recognition/api/',
  api_key: 'bfdb077236c9505bd11993340608633cf9ea730e',
  version:'v3',
  version_date: '2015-05-19'
});


var storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
      cb(null, './public/uploads/')
  },

  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
});


var upload = multer({ storage: storage}).single('image');

router.get('/flowers', function(req, res, next) {
  Flower.find(function(err, flowers){
    if(err){ return next(err); }

    res.json(flowers);
  });
});

router.get('/getAll', function (req, res, next) {
  User.find(function (err, users) {
      if (err) return next(err);

      res.send(users);
    });
});


router.post('/upload', function(req, res,next) {
  upload(req,res,function(err){
    if(err){
         res.json({error_code:1,err_desc:err});
         return;
    }

    var file = fs.createReadStream(req.file.path);

    var params = {
      images_file: file,
      classifier_ids : "flowers_834885496"
    };  

    visual_recognition.classify(params,function(err, classify) {
                        
      if (err) {
        res.send("bad");
        next(err);
      }
      else{
        var flower = new Flower();

          flower.name = classify.images[0].classifiers[0].classes[0].class;

          var fileString = req.file.path;
          var length = fileString.length;
          var fileFinal = fileString.substring(7,length);

          flower.imageURL = fileFinal;

          flower.save(function(err, flower){
          if(err){ return next(err); }

          console.log(flower)

          res.redirect('/#/flowers');
        });
      }
    }); 
  });       
});

module.exports = router;


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// router.post('/classify', function(req, res, next) {
//   visual_recognition.classify({"url":req.body.text,"classifier_ids" : "flowers_834885496"},function(err, classify) {
      
//         if (err) {
//           return next(err);
//         }
//         else
//           return res.send(classify);
//   }); 
// });


//   var flower = new Flower();
  //   flower.name = "test";
  //   flower.image = req.body.text;
  //   flower.save(function(err, flower){
  //   if(err){ return next(err); }

  //   res.json(flower);
  // });

   
// var stringImage = req.body.text;
// var imgFile = new Base64Decode(stringImage);
// res.send(imgFile);

      // var params = {
      //      "url": "http://localhost:3000/classify",
      //      "classifier_ids" : "flowers_834885496"
      //    };
        
