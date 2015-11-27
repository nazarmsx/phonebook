'use strict';

var app = angular.module('myApp', ['myApp.controllers','ngRoute','ngResource','ngRoute','ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexController'
    }).when('/home', {
        templateUrl: 'partials/home',
        controller: 'HomeController'
    }).otherwise({
        redirectTo: '/'
    });
}]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
//'use strict';
//
//var app = angular.module('myApp',['ngRoute','ngResource','ngRoute'])
//
//    .config(['$routeProvider', function($routeProvider) {
//        $routeProvider.when('/', {
//            templateUrl: 'partials/index',
//            controller: 'homeCtrl'
//        });
//    }])
//
//    .controller('homeCtrl', function($scope,$http) {
//        $scope.project = {
//            description: 'Nuclear Missile Defense System',
//            rate: 500
//        };
//
//    });
//
////// Declare app level module which depends on views, and components
////var app = angular.module('myApp', [
////    'ngRoute',
////    'ngResource',
////    'myApp.home'
////]).
////    config(['$routeProvider', function($routeProvider) {
////        $routeProvider.otherwise({redirectTo: '/'});
////    }]);
//
//


