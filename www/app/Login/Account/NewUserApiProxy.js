

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
            var newDBpath = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser" + "/" + newhash);
            //testing
            newDBpath.set({
                Email: UserInfo.getEmail(),
                UserName: UserInfo.getUserName(),
                Image: UserInfo.getPicture(),
                MsgLog: "",
                FriendList: ""
            });
        }

        var checkIfExistingUser = function () {

            var currentUserEmail = UserInfo.getEmail();
            var userPath = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser");
            userPath.once("value", function (snapshot) {
                console.log(snapshot.val());

                //initialize for for loop
                var x;
                var users = snapshot.val();

                for (x in users) {
                    console.log("new user for" + users[x]);
                    console.log(currentUserEmail);
                    console.log(users[x].Email);
                    if(currentUserEmail.localeCompare(users[x].Email) == 0){
                        console.log("we got true");
                        UserInfo.setExistingUser(true);
                    }
                    console.log(users[x].Email);
                }
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
            checkIfExistingUser : checkIfExistingUser
        }
    }]);
