app.controller('FlowerCtrl', ['$scope', 'flowers','users', 'auth', function($scope, flowers, users, auth) {

  flowers.getResult();

  $scope.results = flowers.results;
  $scope.resultFlower = flowers.results[flowers.results.length-1];
  $scope.users = [];

  users.getUsers().then(function(users){
    $scope.users = users.data;

    console.log(users);
    console.log($scope.users);

    if(auth.currentUser() != undefined){
        for(var i=0; i<$scope.users.length; i++){
          if(auth.currentUser()._id == $scope.users[i]._id){
            $scope.users[i].flowers.push($scope.results[$scope.results.length-1]);
            console.log($scope.users[i]);
          }
        }
    };
  });
 
}]);

//result template-flower.html. connected with flower.js service