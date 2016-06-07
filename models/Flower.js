var mongoose = require('mongoose');

var FlowerSchema = new mongoose.Schema({
  name: {type: String, default:"unknown"},
  imageURL: String,
  location:{type:String, default: "unknown"}
});

var Flower = mongoose.model('Flower', FlowerSchema);

module.exports = Flower;