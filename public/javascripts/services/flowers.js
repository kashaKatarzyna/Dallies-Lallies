app.factory('flowers', ['$http', function($http) {
  console.log("hey im in flowers service");
  
  var flowerService = {

    results:[],

    flowers : [{
      id: 0,
      name:"Peonia",
      dataBName: "peony",
      Image:"images/rsz_photo-1432873837230-ba73612038b5.jpg",
      description: "The peony is a flowering plant in the genus Paeonia,the family Paeoniaceae. Scientists differ on the number of species that can be distinguished ranging from 25 to 40,although the current consensus is 33 known species. Most are 0.25–1 metre tall, but some are woody shrubs 0.25–3.5 metres tall. They are regarded as a symbol of good fortune and a happy marriage, They can live to be ONE HUNDRED years old and they come in every color EXCEPT blue. In ancient times peonies were believed to relieve headaches and help with asthma. They natively grow in Asia, Southern Europe and Western North America",
    }, {
      id: 1,
      name:"Rosa",
      dataBName:"roses_positive",
      Image: "images/rsz_photo-1453454267602-abda9ebb66a6.jpg",
      description: "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over a hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing or trailing with stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.",
      
    }, {
      id: 2,
      name:"Anthericum  liliago",
      dataBName:"BernardsLily",
      Image: "images/bernardsLily.jpg",
      description: " It is native to Europe and Turkey, growing in dry pastures, stony places and open woods and flowering in early summer. The specific epithet liliago means lily-like or lily-carrier. Like many plants whose common names include lily, it is not closely related to the true lilies. "
    }],

  getResult:function(){
    return $http.get('/flowers').then(function(data){
      console.log(data);
      angular.copy(data.data, flowerService.results);
    })
  },

  
    };  //flowerService
  console.log(flowerService);
  console.log("leaving flower service");

  return flowerService;
}]);


// fetch: function() {
//   console.log("in fetch");
//       return $http.post('/classify').then(function(data){
//         angular.copy(data.data, fflowersService.classify);
//         console.log("in result");
//         console.log(res);
//       });
//     },

 
