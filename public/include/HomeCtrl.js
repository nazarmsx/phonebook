/**
 * Created by nazar on 27.11.2015.
 */

controllers.controller('HomeController', ['$scope','$location', function($scope,$location) {
    $scope.contacts=
        [{id:1,first_name:'Nazar ',last_name:'Chuba',phone:'+38(096)-232-23-26',comment:'First comment.'},
        {id:2,first_name:'Steve',last_name:'Jobs',phone:'+38(096)-999-34-32',comment:'Second comment.'},
        {id:3,first_name:'Bill',last_name:'Gates',phone:'+38(096)-902-23-93',comment:'Third comment.'}];

$scope.edit=function(contact){
    $scope.user=contact;
};
}]);