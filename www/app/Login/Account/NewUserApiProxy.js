

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
                FriendList: "",
                UUID: UserInfo.getuserIDKey()
            });
        }

        var checkIfExistingUser = function () {

            var currentUserEmail = UserInfo.getEmail();
            var userPath = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser");
            userPath.once("value", function (snapshot) {

                var x;
                var users = snapshot.val();

                for (x in users) {
                    if (currentUserEmail) {
                        if (currentUserEmail === users[x].Email) {
                            UserInfo.setExistingUser(true);
                            UserInfo.setuserIDKey(users[x].UUID);
                        }
                    }
                }
            })
        }

        var updateProfile = function(userName, picurl, emailurl){
            console.log("we here");
            var userID = UserInfo.getuserIDKey();
            console.log(userID);
            var userPath = new Firebase("https://roomateapp-1470094404168.firebaseio.com/LoginUser/" + userID);
            userPath.update({Email: emailurl, UserName: userName, Image: picurl})
        }


        return {
            addNewUser: addNewUser,
            newAddUser: newAddUser,
            checkIfExistingUser: checkIfExistingUser,
            updateProfile : updateProfile
        }
    }]);
