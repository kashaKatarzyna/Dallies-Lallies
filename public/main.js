
// $('.submit-text').on('click',function(){

//     var text = $('#text-input').val();

//       if(text.length < 2) {
//         $('.title').html("TELL ME MORE");
//       }

//     else{
//       var data = {
//         text:text
//         }; 
//          $(this).val('');

//       fetch(data);
//   };
  
// });


// var fetch = function (data) {

//  console.log(data);

//  $.ajax({
//    method: "POST",
//    url: 'http://localhost:3000/classify', 
//    dataType: "JSON",
//    data: data,//URIEncodedSong, 

//    success: function(response) {
// console.log(response);

//     var name = response.images[0].classifiers[0];

//     var hscore = 0;
//     var flower = "";

//     for(var i =0; i<name.classes.length; i++){
      
//       if(name.classes[i].score> hscore){
//         hscore = name.classes[i].score;
//         flower = name.classes[i].class;
//       }
//     }
//      console.log(hscore);
//      console.log(flower);

//       if(flower=="roses_positive"){
//         $('.result').html('<img class="pic" src= "https://s-media-cache-ak0.pinimg.com/736x/79/96/f6/7996f69e253b417e5ab9e417b53d9933.jpg"/>' );
//       }

//       else if (flower=="BernardsLily"){
//         $('.result').html('<img class="pic" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Anthericum_liliago_June_2007-1.jpg/220px-Anthericum_liliago_June_2007-1.jpg"/>');
//       }

//       else if(flower=="peony"){
//         $('.result').html('<img class="pic" src="http://www.atlanticavenuegarden.com/wp-content/uploads/2013/04/Pink-Peony-resized1.jpg"/>');
//       }
//    },

//    error: function(jqXHR, textStatus, errorThrown) {
//      console.log(textStatus);
//    }
//  }); 
// }   //closing

    // var name1 = response.images[0].classifiers[0].classes[0].class;
    // var name2 = response.images[0].classifiers[0].classes[1].class;
    // var score1 = response.images[0].classifiers[0].classes[0].score;
    // var score2 = response.images[0].classifiers[0].classes[1].score;

// function saveImage(){
//   var file =document.getElementById("input").files[0];
//   // var dataURL = file.toDataURL();
//   console.log(file);
//  };


