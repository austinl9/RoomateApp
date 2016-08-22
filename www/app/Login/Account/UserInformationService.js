
angular.module('RoomateApp').factory('UserInfo', function () {
    var LoginStatus = false;
    var userName = {};
    var pictureURL = {};
    var userEmail = {};

    var getLoginStatus = function(){
        return LoginStatus;
    }

    var setLoginStatus = function(login){
        LoginStatus = login;
    }

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

    var getEmail = function(){
        return userEmail;
    }

    var setEmail = function(email){
        userEmail = email;
    }

    return {
        getLoginStatus : getLoginStatus,
        setLoginStatus : setLoginStatus,
        setUserName : setUserName,
        getUserName : getUserName,
        setPicture : setPicture,
        getPicture : getPicture,
        getEmail : getEmail,
        setEmail : setEmail,
    }
});