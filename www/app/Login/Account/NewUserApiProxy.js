

angular.module('RoomateApp')
    .factory('FirebaseDB', ['LoginUser', function (LoginUser) {

        var LoginUser = LoginUser;

        var addNewUser = function (UserInfo) {
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

        return {
            addNewUser: addNewUser
        }
    }]);
