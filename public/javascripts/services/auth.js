app.factory('auth', ['$http', '$window', function($http, $window){

   var auth = {};

console.log("hey im in auth.js1");


   auth.saveToken = function (token) {
     $window.localStorage['dalliesandlallies-jwt'] = token;
   };

   auth.getToken = function (){
     return $window.localStorage['dalliesandlallies-jwt'];
   }

   auth.register = function (user) {
     console.log("hey im in auth.js2");
     return $http.post('/register', user).success(function(data){
       auth.saveToken(data.token);
     });
   };

   auth.logIn = function(user){
    console.log(user);
    return $http.post('/login',user).success(function(data){
      console.log("wha up");
      auth.saveToken(data.token);
    })
   };

    auth.isLoggedIn = function(){
     var token = auth.getToken();
     if(token){
       var payload = JSON.parse($window.atob(token.split('.')[1]));
       return payload.exp > Date.now() / 1000;
     } else {
       return false;
     }
   };

   auth.currentUser = function(){
     if(auth.isLoggedIn()){
       var token = auth.getToken();
       var payload = JSON.parse($window.atob(token.split('.')[1]));
       return payload;
     }
   };

   auth.logOut = function(){
     $window.localStorage.removeItem('dalliesandlallies-jwt');
   };
   
  return auth;
}]);