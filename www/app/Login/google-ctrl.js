(function () {
    'use strict';

    angular.module('RoomateApp').controller('googleCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', 'FirebaseDB', googleCtrl]);

    function googleCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo, FirebaseDB) {

        $scope.getUserInfo = function () {
            gapi.client.request(
                {
                    'path': '/plus/v1/people/me',
                    'method': 'GET',
                    'callback': $scope.userInfoCallback
                }
            )
        }

        $scope.confirmGoogleLogin = function () {
            $scope.getUserInfo();
            FirebaseDB.addNewUser();
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
            UserInfo.setEmail(userInfo.emails[0].value);
        }

        $scope.$on('event:google-plus-signin-success', function (event, authResult) {
            UserInfo.setLoginStatus(true);
            //this does a specific update on the scope binding
            $scope.$apply(function(){
                $scope.GoogleUser = true;
            })
        });
        $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
            console.log("failure bruh");
            $scope.Googleuser = false;
        });

        $scope.testingbutton = function(){
            FirebaseDB.testingGettingStuff();
        }
    }
})();


