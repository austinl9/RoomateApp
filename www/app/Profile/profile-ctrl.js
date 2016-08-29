(function () {
    'use strict';

    angular.module('RoomateApp').controller('ProfileCtrl', ['$scope', '$window', '$ionicPopup', '$timeout', 'UserInfo', 'FirebaseDB', ProfileCtrl]);

    function ProfileCtrl($scope, $window, $ionicPopup, $timeout, UserInfo, FirebaseDB) {

        var validEmail = function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        $scope.$watch(function ()
        { return UserInfo.getLoginStatus(); }, function (newValue, oldValue) {
            if (newValue != null) {
                $scope.loginStatus = newValue;
            }
            //we can't view profile if you aren't logged in
            if ($scope.loginStatus == false) {
                $scope.showNotLoginAlert();

            }
        }, true);

        $scope.$watch(function ()
        { return UserInfo.getUserName(); }, function (newValue, oldValue) {
            if (newValue != null) {
                $scope.name = newValue;
            }
        }, true);

        $scope.$watch(function ()
        { return UserInfo.getPicture(); }, function (newValue, oldValue) {
            if (newValue != null) {
                $scope.pictureURL = newValue;
            }
        }, true);

        $scope.$watch(function ()
        { return UserInfo.getEmail(); }, function (newValue, oldValue) {
            if (newValue != null) {
                $scope.userEmail = newValue;
                $scope.validEmail = validEmail($scope.userEmail);
            }
        }, true);

        // An alert dialog
        $scope.showNotLoginAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Not Logged In!',
                template: 'Please Login using Facebook or Google'
            });

            alertPopup.then(function (res) {
                UserInfo.createBlankUser();
                $window.location.href = '/#/login';
            });
        };

        $scope.grabinformation = function(){
            FirebaseDB.getUserInfo();
        }

        $scope.updateProfile = function () {
            FirebaseDB.updateProfile($scope.name, "", $scope.userEmail);
        }

    }
})();


