/**
 * Created by nazar on 27.11.2015.
 */

controllers.controller('HomeController', ['$scope','$location', function($scope,$location) {
    $scope.contacts=
        [{first_name:'Nazar ',last_name:'Chuba',phone_number:'+38(096)-375-74-65'},
        {first_name:'Steve',last_name:'Jobs',phone_number:'+38(096)-375-74-65'},
        {first_name:'Bill',last_name:'Gates',phone_number:'+38(096)-375-74-65'}];


}]);