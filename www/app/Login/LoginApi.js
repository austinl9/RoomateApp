

//this is the database factory call for firebase

angular.module('RoomateApp').factory("LoginUser", function ($firebaseArray) {

    //this will only access our login information (LoginUSER)
    var itemsRef = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser");
    return $firebaseArray(itemsRef);
})