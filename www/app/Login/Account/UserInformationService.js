// 'use strict';
// angular.module('RoomateApp').factory('UserInfo', function () {

//     var userInfo = {
//         name = "",
//         userName = "",
//         pictureURL = "",
//     };

//     // //when you first create a person the username will be their email
//     // userInfo.setuserName = function (username) {
//     //     userInfo.userName = username;
//     // }

//     // userInfo.getuserName = function () {
//     //     return userInfo.userName;
//     // }

//     // userInfo.setName = function (name) {
//     //     userInfo.name = name;
//     // }

//     return userInfo;
// });

// We need to inject the $http service in to our factory
// angular.module('RoomateApp').factory("UserInfo", function ($http) {
//     var isLogin = false;
//     var userName = "";
//     var userEmail = "";
//     var createName = "";

//     return {

//     }
//     //   // Define the DribbblePlayer function
//     //   var userInfo = function() {
//     //     // Define the initialize function
//     //     this.setUserName = function() {


//     //       // When our $http promise resolves
//     //       // Use angular.extend to extend 'this'
//     //       // with the properties of the response
//     //       playerData.then(function(response) {
//     //         angular.extend(self, response.data);  
//     //       });
//     //     };

//     //     // Call the initialize function for every new instance
//     //     this.initialize();
//     //   };

//     //   // Return a reference to the function
//     //   return (DribbblePlayer);
// });

angular.module('RoomateApp').factory('UserInfo', function () {
    var isLogin = false;
    var userName = {};
    var pictureURL = {};

    var setUserName = function (name) {
        userName = name;
    }

    var getUserName = function(){
        return userName;
    }

    var setPicture = function(picture){
        pictureURL = picture;
    }

    var getPicture = function(){
        return pictureURL;
    }

    return {
        setUserName : setUserName,
        getUserName : getUserName,
        setPicture : setPicture,
        getPicture : getPicture
    }
});