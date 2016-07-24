(function () {
    'use strict';

    angular.module('RoomateApp').controller('PlayListCtrl', ['$scope', '$ionicPopover', '$ionicModal', PlayListCtrl]);

    function PlayListCtrl($scope, $ionicPopover, $ionicModal) {


        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    }
})();


