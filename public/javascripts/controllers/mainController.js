app.controller('MainCtrl', ['$scope','flowers', function($scope, flowers){
  console.log("hey");
 
  $scope.flowers = flowers.flowers;
  $scope.input='';
  $scope.result="";
  flowers.getResult();
  $scope.results = flowers.results;
  $scope.indicator = false;
  
  $scope.showRes = function(){
    $scope.indicator = true;
  }

  console.log($scope.flower)

}]);

//linked to home.html template.connected with flowers.js services