app.controller('MainCtrl', ['$scope', 'flowers', function($scope, flowers){
  console.log("hey");
  $scope.flowers = flowers.flowers;
  $scope.input='';
  $scope.result="";

  $scope.showFlower = function(){
    var data = {
      text: $scope.input
    };
    console.log($scope.input);
    flowers.fetch(data);
  }

}]);