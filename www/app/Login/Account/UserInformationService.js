
angular.module('RoomateApp').factory('UserInfo', function () {
    var LoginStatus = false;
    var userName = {};
    var pictureURL = {};

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

    return {
        getLoginStatus : getLoginStatus,
        setLoginStatus : setLoginStatus,
        setUserName : setUserName,
        getUserName : getUserName,
        setPicture : setPicture,
        getPicture : getPicture
    }
});