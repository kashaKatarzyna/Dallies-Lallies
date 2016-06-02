
app.controller('MainCtrl', ['$scope', 'flowers', function($scope, flowers){
 
 $scope.flowers = flowers.flowers;

}]);