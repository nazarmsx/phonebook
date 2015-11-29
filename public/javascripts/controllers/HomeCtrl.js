/**
 * Created by nazar on 27.11.2015.
 */

controllers.controller('HomeController', ['$scope','$location','$http', function($scope,$location,$http) {
    //$scope.contacts=
    //    [{id:1,first_name:'Nazar ',last_name:'Chuba',phone:'+38(096)-232-23-26',comment:'First comment.'},
    //    {id:2,first_name:'Steve',last_name:'Jobs',phone:'+38(096)-999-34-32',comment:'Second comment.'},
    //    {id:3,first_name:'Bill',last_name:'Gates',phone:'+38(096)-902-23-93',comment:'Third comment.'}];

    $http.get('http://localhost:3000/contacts').success(
        function(data){
            $scope.contacts=data;
        }
    );

$scope.edit=function(contact){
    $scope.user=contact;
    console.log( $scope.user);
};
    $scope.add=function()
    {
        $http({
            method:'POST',
            url:'http://localhost:3000/contacts',
            data:
        {
            first_name: $scope.user.first_name,
                last_name: $scope.user.last_name,
            phone: $scope.user.phone,
            comment: $scope.user.comment
        }}).then(function(data){console.log(data);});
    }
    $scope.update=function()
    {
        $http({
            method:'PUT',
            url:'http://localhost:3000/contacts/'+$scope.user._id,
            data:
            {
                first_name: $scope.user.first_name,
                last_name: $scope.user.last_name,
                phone: $scope.user.phone,
                comment: $scope.user.comment
            }}).then(function(data){ $http.get('http://localhost:3000/contacts').success(
            function(data){
                $scope.contacts=data;
            }
        );});
    }
}]);