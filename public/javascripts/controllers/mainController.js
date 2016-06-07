app.controller('MainCtrl', ['$scope','flowers', function($scope, flowers){
  console.log("hey");
 
  $scope.flowers = flowers.flowers;
  $scope.input='';
  $scope.result="";
  flowers.getResult();
  $scope.results = flowers.results;

  console.log($scope.flower)

//   $scope.sendFlower = function(){
//     console.log($scope.myFile);

//     // var data = {
//     //   name:"image",
//     //   file: $scope.myFile
//     // };       
//     flowers.getFlower($scope.myFile);
//   };

//   $scope.showResult = function(){
//     console.log($scope.result);
//   };

}]);

//linked to home.html template.connected with flowers.js services