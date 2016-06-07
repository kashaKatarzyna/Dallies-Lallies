var app = angular.module('flowerPower', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'MainCtrl',
      // resolve: {
      //   postPromise: ['flowers', function(flowers){
      //     return flowers.fetch();
      //   }]
      // }
      
    })
    .state('login', {
        url: '/login',
        templateUrl: '/templates/login.html',
        controller:'AuthCtrl',
      })
    
     .state('register', {
        url: '/register',
        templateUrl: '/templates/register.html',
        controller:'AuthCtrl',
      //   onEnter: ['$state', 'auth', '$timeout', function($state, auth, $timeout){
      //   // console.log('1');
      //   if(auth.isLoggedIn()){
      //     $timeout(function () {
      //       $state.go('home');
      //     },50);
      //   }
      // }]
      })
    .state('flower', {
      url: '/flower',
      templateUrl: '/templates/flower.html',
      controller: 'FlowerCtrl',
     })
    
  $urlRouterProvider.otherwise('home');
}]);