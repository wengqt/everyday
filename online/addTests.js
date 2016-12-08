/**
 * Created by weng on 2016/12/4.
 */
Bmob.initialize("99cc872ea6272f43ffd52ccdde21f058", "aa9730efd33039cd0e19e4b1fbd96e39");
var Test = Bmob.Object.extend("Test");


for( var i=45;i<60;i++){
    var test_2 = new Test();
    var a =i.toString();
    var _b =i+1;
    var _c =i+3;
    var _d =i+4+i;
    var _e =i-1+i;
    var _f =i;
    var b =_b.toString();
    var c =_c.toString();
    var d =_d.toString();
    var e =_e.toString();
    var f =_f.toString();
    test_2.set("testcontent",b+'+'+c+'=');
    test_2.set("answer",'d');
    test_2.set("NO_",i);
    test_2.set("option_a",f);
    test_2.set("option_b",c);
    test_2.set("option_c",e);
    test_2.set("option_d",d);

    test_2.save(null,{
        success:function(test_2){
            console.log("create object success, object id:"+test_2.id);
        },
        error:function (test_2, error) {
            console.log("create object fail"+error);
        }
    });
}

