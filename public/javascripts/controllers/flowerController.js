app.controller('FlowerCtrl', ['$scope', 'flowers', '$stateParams', function($scope, flowers, $stateParams) {
 $scope.flowers = $stateParams.index
 ;

 
}]);