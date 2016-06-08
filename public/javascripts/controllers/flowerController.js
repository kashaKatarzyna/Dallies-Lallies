app.controller('FlowerCtrl', ['$scope', 'flowers','users', 'auth', function($scope, flowers, users, auth) {

$scope.results = flowers.results;
  // console.log($scope);

  $scope.resultFlower = flowers.results[flowers.results.length-1];
  // console.log($scope.resultFlower);

  $scope.resultFlower.name;

  $scope.finalResults = flowers.flowers;


for(var i=0; i < $scope.finalResults.length; i++){

  if($scope.resultFlower.name==$scope.finalResults[i].dataBName){

    $scope.name= $scope.finalResults[i].name;
    $scope.image= $scope.finalResults[i].Image;
    $scope.description= $scope.finalResults[i].description;
  
  }
}














  // flowers.getResult();

  // $scope.results = flowers.results;
  // $scope.resultFlower = flowers.results[flowers.results.length-1];
  // $scope.users = [];

  // users.getUsers().then(function(users){
  //   $scope.users = users.data;

  //   console.log(users);
  //   console.log($scope.users);

    // if(auth.currentUser() != undefined){
    //     for(var i=0; i<$scope.users.length; i++){
    //       if(auth.currentUser()._id == $scope.users[i]._id){
    //         $scope.users[i].flowers.push($scope.results[$scope.results.length-1]);
    //         console.log($scope.users[i]);
    //       }
    //     }
    // };
  // });
 
}]);

//result template-flower.html. connected with flower.js service