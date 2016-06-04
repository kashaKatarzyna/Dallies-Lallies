app.controller('ResultsCtrl', ['$scope', 'results', '$stateParams', function($scope, results, $stateParams) {
 $scope.flowers = $stateParams.index;

 
}]);