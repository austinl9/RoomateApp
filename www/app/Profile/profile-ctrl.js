(function () {
    'use strict';

    angular.module('RoomateApp').controller('ProfileCtrl', ['$scope', 'UserInfo', ProfileCtrl]);

    function ProfileCtrl($scope, UserInfo) {

        $scope.$watch(function ()
        { return UserInfo.getUserName(); }, function (newValue, oldValue) {
            if (newValue != null) {
                //update Controller2's xxx value
                $scope.name = newValue;
            }
        }, true);

        // $scope.name = "test";
        $scope.name = UserInfo.getUserName();
        // $scope.name = "test";

    }
})();


