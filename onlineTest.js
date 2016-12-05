/**
 * Created by weng on 2016/12/3.
 */

Bmob.initialize("99cc872ea6272f43ffd52ccdde21f058", "aa9730efd33039cd0e19e4b1fbd96e39");

var Uname = document.getElementById("username").value;
var pass = document.getElementById("userpassword").value;
function signin() {
    console.log(pass);

    Bmob.User.logIn(Uname, pass, {
        success: function(user) {
           alert('success');
            document.getElementById("test").style.display='block';
            document.getElementById("signpage").style.display='none';

        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            alert("登录失败");
        }
    });

}















var Test = Bmob.Object.extend("Test");

var test = new Test();

var query =new Bmob.Query(Test);

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

var score = 0;
function Score() {

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

    // setInterval(showTime(),1000);
    setTimeout("alert('恭喜你获得了'+score+'分')",3000);


    document.getElementById("test").style.display ='none';
    var p =document.createElement("p");
    p.innerText="please wait for three seconds";
    document.body.appendChild(p);


}




