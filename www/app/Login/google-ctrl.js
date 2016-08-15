
// //client id
// // 1051787815971-ohb5htfb3o4jdkuv447i7gmscsrgjr2h.apps.googleusercontent.com 

// //client secret
// // 4TKycReFpRAcxTZOfqgA5DpH 


// (function () {
//     'use strict';

//     angular.module('RoomateApp', ['angular-google-gapi']).controller('googleCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', 'GooglePlus', googleCtrl]);

//     // angular.module('RoomateApp').config(['GooglePlusProvider', function (GooglePlusProvider) {
//     //     GooglePlusProvider.init({
//     //         clientId: '1051787815971-ohb5htfb3o4jdkuv447i7gmscsrgjr2h.apps.googleusercontent.com ',
//     //         apiKey: '4TKycReFpRAcxTZOfqgA5DpH '
//     //     });
//     // }]);
//     function googleCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo) {
//         $scope.login = function () {
//             GooglePlus.login().then(function (authResult) {
//                 console.log(authResult);

//                 GooglePlus.getUser().then(function (user) {
//                     console.log(user);
//                 });
//             }, function (err) {
//                 console.log(err);
//             });
//         };

//     }
// })();

