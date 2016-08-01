(function () {
    'use strict';

    angular.module('RoomateApp').controller('ProfileCtrl', ['$scope', '$window', '$ionicPopup', '$timeout', 'UserInfo', ProfileCtrl]);

    function ProfileCtrl($scope, $window, $ionicPopup, $timeout, UserInfo) {

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

        // An alert dialog
        $scope.showNotLoginAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Not Logged In!',
                template: 'Please Login using Facebook or Google'
            });

            alertPopup.then(function (res) {
                $window.location.href = '/#/fb';
            });
        };

    }
})();


