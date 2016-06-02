var express = require('express');
var router = express.Router();

 // var Base64Decode = require('base64-stream').decode;
 // var stringImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAU....5ErkJggg==";
// var imgFile = new Base64Decode(stringImage);

var watson = require('watson-developer-cloud');

var visual_recognition = watson.visual_recognition({
  url: 'https://gateway-a.watsonplatform.net/visual-recognition/api/',
  api_key: 'bfdb077236c9505bd11993340608633cf9ea730e',
  version:'v3',
  version_date: '2016-05-20'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/classify', function(req, res, next) {
  visual_recognition.classify({"url":req.body.text, "classifier_ids": "flowers_834885496"},function(err, classify) {
    
      if (err) {
        return next(err);
      }
      else
        return res.send(classify);
    }); 
});
 module.exports = router;

 // router.post('/', function(req, res) {
 
 //   // Classifiers are 0 = all or a json = {label_groups:['<classifier-name>']}
 //   var classifier = req.body.classifier || '0';  // All
 //   if (classifier !== '0') {
 //     classifier = JSON.stringify({label_groups:[classifier]});
 //   }
 
 //   var imgFile;
   
 //   var stringImage = req.body.url;
 //   //console.log("stringImage is: "+stringImage);
 //   imgFile = new Base64Decode(stringImage);
 //   console.log("imgFile is: " +imgFile);
 //   var formData = {
 //     labels_to_check: classifier,
 //     imgFile: imgFile
 //   };
 // console.log("Form Data is: "+ formData);
 //   visualRecognition.recognize(formData, function(err, result) {
 //     if (err) {
 //       console.log("We have an error");
 //       return res.status(500).json({ error: err });
 //     }else {
 //       //console.log("We have a return of: "+res.json);
 //       return res.json(result);
 //     }
 //   });
 // });

 // router.post('/api/classify', app.upload.single('images_file'), function(req, res) {
 //  var params = {
 //    url: null,
 //    images_file: null
 //  };

 //  if (req.file) { // file image
 //    params.images_file = fs.createReadStream(req.file.path);
 //  } else if (req.body.url && req.body.url.indexOf('images') === 0) { // local image
 //    params.images_file = fs.createReadStream(path.join('public', req.body.url));
 //  } else if (req.body.image_data) {  // write the base64 image to a temp file
 //    var resource = zipUtils.parseBase64Image(req.body.image_data);
 //    var temp = path.join(__dirname, 'uploads', uuid.v1() + '.' + resource.type);
 //    fs.writeFileSync(temp, resource.data);
 //    params.images_file = fs.createReadStream(temp);
 //  } else if (req.body.url && validator.isURL(req.body.url)) { // url
 //    params.url = req.body.url;
 //  } else { // malformed url
 //    return res.status(400).json({ error: 'Malformed URL', code: 400 });
 //  }

 //  if (params.images_file) {
 //    delete params.url;
 //  } else {
 //    delete params.images_file;
 //  }
 //  var methods = [];
 //  if (req.body.classifier_id) {
 //    params.classifier_ids = [req.body.classifier_id];
 //    methods.push('classify');
 //  } else {
 //    methods.push('classify');
 //  }