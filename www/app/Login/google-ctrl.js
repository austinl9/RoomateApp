(function () {
    'use strict';

    angular.module('RoomateApp').controller('googleCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', 'LoginUser', 'FirebaseDB', googleCtrl]);

    function googleCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo, LoginUser, FirebaseDB) {

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
            FirebaseDB.addNewUser(UserInfo);
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
            $scope.GoogleUser = true;
            console.log("google user is true");

        });
        $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
            console.log("failure bruh");
            $scope.Googleuser = false;
        });

        //testing firebase db


//Login user schema:
//USERID EMAIL USERNAME IMAGEURL MSGLOGS FRIENDLIST
//This is the datastructure to put into firebase
        $scope.LoginUser = LoginUser;
        $scope.addGoogleUserToFireBase = function () {
            //need to have an if statement to check if login was valid
            if(UserInfo.getLoginStatus() == true){
                $scope.LoginUser.$add({
                    Email: UserInfo.getEmail(),
                    UserName: UserInfo.getUserName(),
                    Image: UserInfo.getPicture(),
                    MsgLog: "",
                    FriendList: ""
                })
            }

        }

        //some kind of method to check if 
    }
})();


