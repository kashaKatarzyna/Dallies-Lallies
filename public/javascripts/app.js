var app = angular.module('flowerPower', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['flowers', function(flowers){
          return posts.getAll();
        }]
       }
    })
    
    .state('post', {
      url: '/posts/:id',
      templateUrl: '/templates/posts.html',
      controller: 'FlowersCtrl',
      resolve: {
        post: ['$stateParams', 'flowers', function($stateParams, flowers) {
          return posts.get($stateParams.id);
        }]
      }
    })
  $urlRouterProvider.otherwise('home');
}]);