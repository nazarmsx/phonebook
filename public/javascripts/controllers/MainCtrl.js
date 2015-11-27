var controllers = angular.module('myApp.controllers', []);
controllers.controller('IndexController', ['$scope','$location', function($scope,$location) {
    $scope.message = 'Hello From Controller';
    $scope.user = {login:'nazar',password:'1111'};
    $scope.login=function()
    {
        $location.path("/home");
    };
}]);