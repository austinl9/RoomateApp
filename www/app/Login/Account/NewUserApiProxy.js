

angular.module('RoomateApp')
    .factory('FirebaseDB', ['LoginUser', 'UserInfo', function (LoginUser, UserInfo) {


        var itemsRef = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser");
        var LoginUser = LoginUser;

        var addNewUser = function () {
            //need to have an if statement to check if login was valid
            if (UserInfo.getLoginStatus() == true) {
                LoginUser.$add({
                    "Name": "keyValu",
                    Email: UserInfo.getEmail(),
                    UserName: UserInfo.getUserName(),
                    Image: UserInfo.getPicture(),
                    MsgLog: "",
                    FriendList: ""
                })
            }

        }

        var newAddUser = function (newhash) {
            //need to have an if statement to check if login was valid

            //creates a new hash
            var newDBpath = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser"+"/" + newhash);
            //testing
            newDBpath.set({
                    Email: UserInfo.getEmail(),
                    UserName: UserInfo.getUserName(),
                    Image: UserInfo.getPicture(),
                    MsgLog: "",
                    FriendList: ""
                });
        }

        var getUsers = function(){
            var userPath = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser");
            userPath.orderByValue().on("value", function(snapshot){
                console.log(snapshot);
                snapshot.forEach(function(data){
                    console.log(data);
                    console.log("THIS IS EACH USER" + data.Email + "and this is the userName" + data.UserName);
                })
            })
        }


        var testingGettingStuff = function () {

            itemsRef.on("value", function (snapshot) {
                console.log(snapshot.val());
                var test = snapshot.val();
                console.log(test.austin);
                console.log(snapshot.key());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }


        return {
            addNewUser: addNewUser,
            testingGettingStuff: testingGettingStuff,
            newAddUser: newAddUser,
            getUsers : getUsers
        }
    }]);
