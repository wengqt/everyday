/**
 * Created by weng on 2016/12/6.
 */
Bmob.initialize("99cc872ea6272f43ffd52ccdde21f058", "aa9730efd33039cd0e19e4b1fbd96e39");

var currentUser = Bmob.User.current();
var student = Bmob.Object.extend("_User");

var teacherName = currentUser.get("username");

var queryStu =new Bmob.Query(student);
var stu =[];
queryStu.equalTo("ites_teacher",teacherName);
queryStu.find({
    success: function(results) {

        // 循环处理查询到的数据
            for(var i =0;i<results.length;i++){
                stu[i]=results[i];
                // console.log(stu);
                var object = results[i];
                var name = object.get("username");
                var testTime = object.get("testTime");

                var li = document.createElement("li");
               var liText="学生姓名："+name+" 考了 "+testTime+"次，成绩分别是";

                var score=[];
                for(var a = 0;a<=testTime;a++){
                     score[a] = object.get("test"+a);
                    if(score[a]!==undefined){
                        liText=liText+score[a]+' ';
                    }

                    li.innerHTML=liText;
                    // console.log(liText);
                }

                var ol = document.getElementById('studentlist');
                ol.appendChild(li);



            }

        //alert("共查询到 " + results.length + " 条记录");


    },
    error: function(error) {
        console.log("查询失败: " + error.code + " " + error.message);
    }
});

function deleteStudent(number) {
    var hisname=stu[number].get("username");
    // console.log(hisname);
    var st = Bmob.Object.extend("_User");
    var querySt =new Bmob.Query(st);
    querySt.equalTo("username",hisname);
    querySt.find({
        success: function(results) {
            // var object =results[0];
            console.log(results);
            // The object was retrieved successfully.
            results[0].destroy({
                success: function(object) {
                    alert("delete success");
                },
                error: function(object, error) {
                    alert("delete fail");
                }
            });
        },
        error: function(object, error) {
            alert("query object fail");
        }
    });
    // querySt.destroyAll({
    //     success: function(){
    //         alert("delete success");
    //     },
    //     error: function(err){
    //         alert("delete fail");
    //     }
    // });
}