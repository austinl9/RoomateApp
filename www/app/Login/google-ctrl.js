(function () {
    'use strict';

    angular.module('RoomateApp').controller('googleCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', googleCtrl]);

    function googleCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo) {


        $scope.GoogleUser = false;

        $scope.getUserInfo = function () {
            gapi.client.request(
                {
                    'path': '/plus/v1/people/me',
                    'method': 'GET',
                    'callback': $scope.userInfoCallback
                }
            )
        }

        $scope.goToProfile = function(){
            $window.location.href = '/#/profile';
        }

        // When callback is received, process user info.
        $scope.userInfoCallback = function (userInfo) {
            $scope.$apply(function () {
                $scope.processUserInfo(userInfo);
            });
        };

        $scope.processUserInfo = function (userInfo) {
            UserInfo.setUserName(userInfo.displayName);
            UserInfo.setLoginStatus(true);
            UserInfo.setPicture(userInfo.image.url);

        }

        $scope.$on('event:google-plus-signin-success', function (event, authResult) {
            UserInfo.setLoginStatus(true);
            $scope.getUserInfo();
            $scope.GoogleUser = true;
        });
        $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
            console.log("failure bruh");
            $scope.Googleuser = false;
        });




    }
})();


