app.factory('users', ['$http','$q' ,'auth', function ($http, $q, auth) {
  var UsersServ = {
    user: {},

    users: [],
    
    // getUser: function (id) {
    //   $http.get('/user/' + id).then(function (data) {
    //     angular.copy(data.data, UsersServ.user);
    //     console.log(data.data);
    //   });
    // },

    getUsers: function () {
      var deferred= $q.defer();
        $http.get('/getAll').then(function (res) {
          deferred.resolve(res);
        }); return deferred.promise; 
    } 
  };
  
  return UsersServ;
}]);