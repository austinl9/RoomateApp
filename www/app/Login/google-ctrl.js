(function () {
    'use strict';

    angular.module('RoomateApp').controller('googleCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', googleCtrl]);

    function googleCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo) {
    

        $scope.testmethod = function (){
            console.log("hi");


        };

         $scope.$on('event:google-plus-signin-success', function (event,authResult) {
    	        console.log("success bruh");
        });
        $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
            console.log("failure bruh");
        });




    }
})();


