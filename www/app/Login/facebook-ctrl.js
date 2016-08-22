(function () {
    'use strict';

    angular.module('RoomateApp').controller('fbCtrl', ['$scope', '$ionicPopover', '$ionicModal', '$window', 'UserInfo', 'FirebaseDB', fbCtrl]);

    function fbCtrl($scope, $ionicPopover, $ionicModal, $window, UserInfo, FirebaseDB) {

        // INITIALIZED FACEBOOK API CALL
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1808359049450591',
                xfbml: true,
                cookie: true,
                version: 'v2.7'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=1808359049450591";
            fjs.parentNode.insertBefore(js, fjs);
        } (document, 'script', 'facebook-jssdk'));
 

        $scope.statusChangeCallback = function (response) {
            console.log("clicked");
            console.log('statusChangeCallback');
            console.log(response);
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // for FB.getLoginStatus().
            if (response.status === 'connected') {
                $scope.getFacebookInfo();
                UserInfo.setLoginStatus(true);
                $window.location.href = '/#/profile';
            }

            // The person is logged into Facebook, but not your app. 
            else if (response.status === 'not_authorized') {
                console.log("is logged into facebook but not my app");

                FB.login(function (response) {

                    //if successful login we will redirect the user to a different page
                    if (response.authResponse) {
                        $scope.getFacebookInfo();
                        UserInfo.setLoginStatus(true);
                        $window.location.href = '/#/profile';
                    }
                    else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });

            }
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            else {
                console.log("is not logged into facebook");
                //allow them to log in
                FB.login(function (response) {

                    //if successful login we will redirect the user to a different page
                    if (response.authResponse) {
                        $scope.getFacebookInfo();
                        UserInfo.setLoginStatus(true);
                        $window.location.href = '/#/profile';
                    }
                    else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            }
        };


        //checks the status of th person
        $scope.checkLoginState = function () {
            FB.getLoginStatus(function (response) {
                $scope.statusChangeCallback(response);
            });
        }


        //get values from Facebook
        //successful API CALL
        //SET the person's name in the successful API call
        $scope.getFacebookInfo = function () {

            //GETS YOUR NAME
            FB.api('/me', function (response) {
                console.log(response);

                //THE FB API CALL IS ASYNCHRONOUS - SCOPE DOESN'T KNOW WHATS GOING ON
                $scope.$apply(function () {
                    $scope.name = response.name;
                    UserInfo.setUserName($scope.name);
                    //GETS YOUR PICTURE
                    $scope.getPicturefromFB ();
                });


            });
        };

//GETS YOUR PICTURE
        $scope.getPicturefromFB = function () {
            FB.api('/me/picture?type=large', function (response) {
                console.log(response)
                $scope.$apply(function (){
                    UserInfo.setPicture(response.data.url);
                    FirebaseDB.addNewUser();
                });
            });
        }

    }
})();


