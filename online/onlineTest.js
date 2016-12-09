/**
 * Created by weng on 2016/12/3.
 */

Bmob.initialize("99cc872ea6272f43ffd52ccdde21f058", "aa9730efd33039cd0e19e4b1fbd96e39");

function signin() {
    var Uname = document.getElementById("username").value;
    var passW = document.getElementById("userpassword").value;
    console.log(passW);

    Bmob.User.logIn(Uname, passW, {
        success: function(user) {
           alert('success');
            var position = user.get("position");
            if(position=="student"){
                document.getElementById("test").style.display='block';
                document.getElementById("signpage").style.display='none';
                queryTest();
            }else{
                window.location.href = 'teacher.html';
            }


        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            alert("登录失败");
        }
    });

}








// if (currentUser) {
//     // do stuff with the user
// } else {
//     // show the signup or login page
// }

var Test = Bmob.Object.extend("Test");

var test = new Test();

var query =new Bmob.Query(Test);



function queryTest() {

    var currentUser = Bmob.User.current();

    query.find({
            success: function(results) {
                console.log("共查询到 " + results.length + " 条记录");
                // 循环处理查询到的数据
                for (var i = 0; i < 20; i++) {
                    var random = Math.round(Math.random()*58);
                    console.log(random);
                    var object = results[random];
                    console.log(object.id + ' - ' + object.get('NO_')+'. '+object.get('testcontent'));
                    var li =document.createElement('li');
                    li.innerText=object.get('NO_')+'. '+object.get('testcontent');
                    var no = i+1;
                    li.id='No-'+object.get('NO_');
                    li.className =object.get('NO_');

                    var selection = document.createElement('select');
                    selection.id=no;
                    var option_a = document.createElement("option");
                    option_a.value='a';
                    option_a.innerText = object.get('option_a');
                    var option_b = document.createElement("option");
                    option_b.value='b';
                    option_b.innerText = object.get('option_b');
                    var option_c = document.createElement("option");
                    option_c.value='c';
                    option_c.innerText = object.get('option_c');
                    var option_d = document.createElement("option");
                    option_d.value='d';
                    option_d.innerText = object.get('option_d');

                    var ul = document.getElementById("testbox");
                    ul.appendChild(li);
                    ul.appendChild(selection);
                    selection.appendChild(option_a);
                    selection.appendChild(option_b);
                    selection.appendChild(option_c);
                    selection.appendChild(option_d);


                }
            },
            error: function(error) {
                alert("查询失败: " + error.code + " " + error.message);
            }
        }

    );
}




var score = 0;
function Score() {
    var currentUser = Bmob.User.current();
    // if (currentUser) {
    //     // do stuff with the user
    // } else {
    //     // show the signup or login page
    // }
    var list = document.getElementById('testbox');


    for (var i =1;i<=10;i++){
        var odd = i*2-2;
        console.log(odd);
        var id =parseInt(list.children[odd].className) ;
        var idquery =new Bmob.Query(Test);
        idquery.equalTo("NO_",id);
      //  alert(id);
        idquery.find({
            success: function(results) {
                //alert("共查询到 " + results.length + " 条记录");
                // 循环处理查询到的数据

                    var object = results[0];


                    if (object.get('answer')==document.getElementById(odd+1).value){
                        score = score+5;
                        console.log(score);
                    }

            },
            error: function(error) {
                console.log("查询失败: " + error.code + " " + error.message);
            }
        });

    }

    setInterval(showTime,1000);
    setTimeout(sendScore,3000);
function sendScore() {
    var time =currentUser.get("testTime");
    time = time+1;
    console.log(time);
    currentUser.set("testTime",time);
    currentUser.set("test"+time,score);
    currentUser.save(null,{
        success:function (user) {
            user.set("testTime",time);
            user.set("test"+time,score);
            alert("score:"+score);
            user.save(null, {
                error: function(userAgain, error) {
                    // This will error, since the Bmob.User is not authenticated
                }
        })
        }
    }
        
    
    
    );
}
    var ti=3;

function showTime() {
    document.getElementById("test").style.display ='none';
    var p =document.createElement("p");
    p.innerText="please wait for "+ti+" seconds";
    document.body.appendChild(p);
    ti--;
}



}




