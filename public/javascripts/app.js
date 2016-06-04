 var app = angular.module('flowerPower', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['flowers', function(flowers){
          return flowers.fetch();
        }]
      }
      
    })

    // .state('login', {
    //     url: '/login',
    //     templateUrl: '/templates/login.html',
    //     controller:'AuthCtrl'
    //   })
    
    //  .state('register', {
    //     url: '/register',
    //     templateUrl: '/templates/register.html',
    //     controller:'AuthCtrl'
    //   })

    // .state('post', {
    //   url: '/posts/:id',
    //   templateUrl: '/templates/flower.html',
    //   controller: 'FlowersCtrl',
      
    // })

  $urlRouterProvider.otherwise('home');
}]);