/**
 * Created by Administrator on 2017/6/8.
 */
AV.User.logIn("user","pass", {
    success:function(loginedUser) {
        console.log({
            success:function(loginedUser) {
                loginedUser.set('age','18', {
                    success:function(loginedUser) {
                        loginedUser.save();
                    },
                    error:function(loginedUser, error) {
                        alert("Error")
                    }
                });
            },
            error:function(error) {
                alert("Error")
            }
        });
    },
    error:function(loginedUser, error) {
        alert("Error")
    }
});