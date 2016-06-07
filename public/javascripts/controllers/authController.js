app.controller('AuthCtrl', ['$scope','$state', 'auth', function($scope, $state, auth){
  $scope.user = {};
  
  console.log($scope.user);
  
  $scope.register = function () {
    console.log('hey in auth controller');
    auth.register($scope.user).then(function(){
     console.log("register");
      $state.go('home');
    });
};
$scope.logIn = function(){
  console.log("im in authcontr");
    auth.logIn($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $state.go('home');
    });
  };
}]);