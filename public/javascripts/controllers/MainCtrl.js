var controllers = angular.module('myApp.controllers', []);
controllers.controller('IndexController', ['$scope','$location','$rootScope','$http', function($scope,$location,$rootScope,$http) {
    $scope.message = 'Hello From Controller';


    $rootScope.password='root';
    $rootScope.login='root';
    $scope.user = {login:$rootScope.password,password:$rootScope.login};
    $scope.login=function()
    {
        $rootScope.login= $scope.user.login;
        $http.get('./contacts/user/'+$rootScope.login).success(
            function(data){
                if(data.length>0)
                    $location.path("/home");
                else
                $http({
                    method:'POST',
                    url:'./contacts/',
                    data:
                    {
                        login:$rootScope.login,
                        password:$rootScope.password
                    }}).then(function(data){});
                $location.path("/home");
            });

    };



    $rootScope.lol="LOL!!";
}]);