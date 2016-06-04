var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var Base64Decode = require('base64-stream').decode;
var passport = require('passport');
var mongoose = require('mongoose');
// var passport = require('passport');

// require('../config/passport');

// var User = require('../models/Users');
// var Flower = require('../models/flower.js');

// router.post('/register', function(req, res, next){
//   if(!req.body.username || !req.body.password){
//     return res.status(400).json({message: 'Please fill out all fields'});
//   }
//   var user = new User();

//   user.username = req.body.username;

//   user.setPassword(req.body.password)

//   user.save(function (err){
//     if(err){ return next(err); }

//     return res.json({token: user.generateJWT()})
//   });
// });



// router.post('/login', function(req, res, next){
//   if(!req.body.username || !req.body.password){
//     return res.status(400).json({message: 'Please fill out all fields'});
//   }
//   passport.authenticate('local', function(err, user, info){
//     if(err){ return next(err); }

//     if(user){
//       return res.json({token: user.generateJWT()});
//     } else {
//       return res.status(401).json(info);
//     }
//   })(req, res, next);
// });


var watson = require('watson-developer-cloud');
var visual_recognition = watson.visual_recognition({
  url: 'https://gateway-a.watsonplatform.net/visual-recognition/api/',
  api_key: 'bfdb077236c9505bd11993340608633cf9ea730e',
  version:'v3',
  version_date: '2015-05-19'
});


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.post('/classify', function(req, res, next) {
  visual_recognition.classify({"url":req.body.text,"classifier_ids" : "flowers_834885496"},function(err, classify) {
      
        if (err) {
          return next(err);
        }
        else
          return res.send(classify);
  }); 
});

module.exports = router;

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
        
