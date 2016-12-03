/**
 * Created by weng on 2016/12/3.
 */

Bmob.initialize("99cc872ea6272f43ffd52ccdde21f058", "aa9730efd33039cd0e19e4b1fbd96e39");
var Test = Bmob.Object.extend("test");

var test = new Test();

var query =new Bmob.Query(Test);

query.find({
        success: function(results) {
            console.log("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.id + ' - ' + object.get('No')+'. '+object.get('testcontent'));
                var li =document.createElement('li');
                li.innerText=object.get('No')+'. '+object.get('testcontent');
                var no = i+1;
                li.id='No-'+no;

                var selection = document.createElement('select');
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