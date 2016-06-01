console.log("hey");

var fetch = function (data) {
var URIEncodedSong = encodeURIComponent(data.text);

$.ajax({
  method: "GET",
  url: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classifiers/flowers_834885496?api_key=bfdb077236c9505bd11993340608633cf9ea730e&version=2016-05-20" 
  dataType: 'json',
  data: data, 

  success: function(response) {
    console.log(response); 
      };