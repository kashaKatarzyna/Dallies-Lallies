app.factory('flowers', ['$http', function($http) {
  
  var flowerService = {

    flowers : [{
      id: 0,
      name:"Peony",
      Image:"http://www.atlanticavenuegarden.com/wp-content/uploads/2013/04/Pink-Peony-resized1.jpg",
      
    }, {
      id: 1,
      name:"Rose",
      Image: "http://ghk.h-cdn.co/assets/cm/15/11/480x480/54ff702993280-6-purple-rose-meaning-de.jpg",
      
    }, {
      id: 2,
      name:"St.Bernard Lily",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Anthericum_liliago_June_2007-1.jpg/220px-Anthericum_liliago_June_2007-1.jpg",
      
    }],
  
fetch: function(data) {
  console.log("in fetch");
      return $http.post('/classify', data).success(function(res){
        console.log("in result");
        console.log(res);
      });
    },


// fetch: function() {
//   console.log("in fetch");
//       return $http.post('/classify').then(function(data){
//         angular.copy(data.data, fflowersService.classify);
//         console.log("in result");
//         console.log(res);
//       });
//     },


  }
}]);