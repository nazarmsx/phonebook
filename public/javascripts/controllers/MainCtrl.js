var controllers = angular.module('myApp.controllers', []);
controllers.controller('IndexController', ['$scope', function($scope) {
    $scope.message = 'Hello From Controller';
    $scope.user = {
        name: 'John Doe',
        email: '',
        phone: '',
        address: 'Mountain View, CA'
    };
}]);