angular.module('OWMApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
       $routeProvider.when('/', {
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
       }).when('/city', {
           templateUrl: 'city.html',
           controller: 'CityCtrl'
       });
    }])
    .controller('HomeCtrl', function($scope){
        
    })
    .controller('CityCtrl', function($scope){
        $scope.city = 'Chicago';
    });