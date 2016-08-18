
angular.module('RoomateApp').factory("Items", function ($firebaseArray) {
    var itemsRef = new Firebase("https://roomateapp-1470094404168.firebaseio.com/items");
    return $firebaseArray(itemsRef);
})