

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
                    "Name": "keyValu"
                })
            console.log("works good" + newhash);

        }


        var testingGettingStuff = function () {
            //go to the ref link var itemsRef = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser ............... UUID...");
            //then extract the information.... will provide a clean way for both fb and google.

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
            newAddUser: newAddUser
        }
    }]);
