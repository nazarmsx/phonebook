/**
 * Created by nazar on 27.11.2015.
 */

controllers.controller('HomeController', ['$scope','$location','$http', 'Upload',function($scope,$location,$http,Upload) {
    //$scope.contacts=
    //    [{id:1,first_name:'Nazar ',last_name:'Chuba',phone:'+38(096)-232-23-26',comment:'First comment.'},
    //    {id:2,first_name:'Steve',last_name:'Jobs',phone:'+38(096)-999-34-32',comment:'Second comment.'},
    //    {id:3,first_name:'Bill',last_name:'Gates',phone:'+38(096)-902-23-93',comment:'Third comment.'}];
    $scope.setDefault=function(){
        $scope.user={};
        $scope.user.image='images/user.png';
    };
    $scope.setDefault();
    $http.get('http://localhost:3000/contacts').success(
        function(data){
            $scope.contacts=data;
        }
    );

$scope.edit=function(contact){
    $scope.user=contact;
   // console.log( $scope.user);
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
            comment: $scope.user.comment,
            image:$scope.user.image
        }}).then(function(data){$scope.contacts.push(data.data);  $scope.alerts.push({msg: 'Contact added!',type: 'success'}); });
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
                comment: $scope.user.comment,
                image:$scope.user.image
            }}).then(function(data){ $http.get('http://localhost:3000/contacts').success(
            function(data){
                $scope.contacts=data;
                $scope.alerts.push({msg: 'Contact updated!',type: 'success'});

            }
        );});
        $scope.setDefault();
        $scope.myform.$setPristine();
    }
    $scope.delete=function()
    {
        $http({
            method:'DELETE',
            url:'http://localhost:3000/contacts/'+$scope.user._id
           }).then(function(data){console.log(data);  $scope.alerts.push({msg: 'Contact deleted!',type: 'success'}); });
        $scope.contacts= $scope.contacts.filter(function (elem){
          // console.log(elem);
           //console.log($scope.user._id);

           if (elem._id==$scope.user._id)
          return false;
           else return true;
       });
        $scope.setDefault();
        $scope.myform.$setPristine();
    };
$scope.uploadImage=function($files) {
    if ($files.length > 0) {
        Upload.upload({
            url: "./api/uploads",

            data: {
                file: $files[0]
            }
        }).then(function (success) {
            console.log(success);
            $scope.user.image = success.data.fileName;
        });
    }
    ;
}
$scope.deleteImage=function()
    {
$scope.files=[];
        $scope.user.image='images/user.png';
    }
    $scope.alerts = [
   //     { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
  //      { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Contact added!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

}]);