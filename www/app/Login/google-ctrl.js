(function () {
    'use strict';

    angular.module('RoomateApp').controller('googleCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', googleCtrl]);

    function googleCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo) {

        $scope.getUserInfo = function () {
            gapi.client.request(
                {
                    'path': '/plus/v1/people/me',
                    'method': 'GET',
                    'callback': $scope.userInfoCallback
                }
            )
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
            console.log("success bruh");
            $scope.getUserInfo();
        });
        $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
            console.log("failure bruh");
        });




    }
})();


