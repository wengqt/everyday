/**
 * Created by weng on 2016/12/5.
 */

Bmob.initialize("99cc872ea6272f43ffd52ccdde21f058", "aa9730efd33039cd0e19e4b1fbd96e39");
function signup() {
    var name = document.getElementById("username").value;
    var pass = document.getElementById("userpassword").value;
    var position = document.getElementById("position").value;
console.log(position);
    var user = new Bmob.User();
    user.set("username", name);
    user.set("password", pass);
    user.set("position", position);

    var yourTeacher = document.getElementById("yourTeacher");
    if(document.getElementById("yourTeacher")){
        var t = document.getElementById("teacherName").value;
        user.set("ites_teacher",t);
        console.log(t);
    }
    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
            alert('注册成功：  姓名：'+name+' 职位：'+position);
            if(document.getElementById("yourTeacher")){
                window.location.href = 'onlineTest.html';
            }else {
                window.location.href = 'onlineTest.html';
            }
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
}