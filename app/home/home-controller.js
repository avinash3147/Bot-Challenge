(function(){
    angular.module('HelperBot')
    .controller('HomeController', ['$scope', '$http', "$state",'$location', function($scope, $http, $state,$location){

        if (localStorage['User-Data']){
            $location.path("/home");
        } else {
            $location.path("/");
        }

          $scope.user = localStorage.getItem('User-Data')

        $scope.logOut = function () {
            localStorage.clear();
            $location.path("/");
        }

    }]);
}());
