

angular.module('RoomateApp')
    .factory('FirebaseDB', ['LoginUser', 'UserInfo', function (LoginUser, UserInfo) {


        var itemsRef = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser");
        var LoginUser = LoginUser;

        var addNewUser = function () {
            //need to have an if statement to check if login was valid
            if (UserInfo.getLoginStatus() == true) {
                LoginUser.$add({
                    Email: UserInfo.getEmail(),
                    UserName: UserInfo.getUserName(),
                    Image: UserInfo.getPicture(),
                    MsgLog: "",
                    FriendList: ""
                })
            }

        }


        var testingGettingStuff = function () {
            itemsRef.on("value", function (snapshot) {
                console.log(snapshot.val());
                console.log(snapshot.key());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }


        return {
            addNewUser: addNewUser,
            testingGettingStuff: testingGettingStuff
        }
    }]);
