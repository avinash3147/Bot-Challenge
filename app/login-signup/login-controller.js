(function(){
    angular.module('HelperBot').controller('LoginController', ['$scope','$location','$http', '$interval', "$state",'$uibModal',
    function (  $scope,$location,$http,$interval, $state,$uibModal){

      if (localStorage['User-Data']){
          $location.path("/home");
      } else {
          $location.path("/");
      }

            $scope.loginView = true;

            $scope.loginScreen = function(){
              $scope.loginView = true;
              $scope.registerView = false;
            };


            $scope.registerScreen = function(){
              $scope.loginView = false;
              $scope.registerView = true;
            };

            $scope.createUser = function(){

                if($scope.newUser.password == $scope.newUser.cnfPassword){
                  $http.post('api/user/signup', $scope.newUser).success(function(response){
                    $scope.pwdMessage = "";
                    $scope.newUser = {};
                    $scope.open();
                  }).error(function(error){
                      console.log(error);
                  })
              }

            }

            $scope.pswdConfirmation = function(){
              if($scope.newUser.password == $scope.newUser.cnfPassword){
                // console.log("ok");
                document.getElementById("pwdMessage").style.color = "green";
                $scope.pwdMessage = "Passwords Match";
              }
              if($scope.newUser.password != $scope.newUser.cnfPassword){
                // console.log("no");
                document.getElementById("pwdMessage").style.color = "red";
                $scope.pwdMessage = "Passwords Do Not Match";
              }
            }

            $scope.logUserIn = function(){
                $http.post('api/user/login', $scope.login).success(function(response){
                  console.log(response);
                   if(response.email){
                     localStorage.setItem('User-Data', response.username);
                     localStorage.setItem('email', response.email);
                     localStorage.setItem('id', response._id);
                     $location.path("/home");
      				       return;
                   }else if (response.message) {
                     document.getElementById("wrongCredentialsMessage").style.color = "red";
                      $scope.wrongCredentialsMessage = response.message;
                   }
                  //  $scope.loggedIn = true;
                }).error(function(error){
                  document.getElementById("wrongCredentialsMessage").style.color = "red";
                   $scope.wrongCredentialsMessage = "Wrong Credentials";
                    console.error(error);
                });
            };

            $scope.logOut = function () {
                localStorage.clear();
                $location.path("/");
            }

            $scope.open = function () {

              $uibModal.open({
                    templateUrl: "app/login-signup/myModalContent.html",

                    backdrop: 'static',

                    size : 'md',

                    controller: ['$uibModalInstance', function($uibModalInstance, message){

                      var vm = this;

                      vm.title = "Succesfully Registered";

                      vm.cancel = function () {
                        $uibModalInstance.dismiss();
                      };

                    }],

                    controllerAs: '$ctrl',

                  });
        };

    }]);
}());
