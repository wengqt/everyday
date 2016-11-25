/**
 * Created by weng on 2016/11/25.
 */
var request;

if(window.XMLHttpRequest){
    request=new XMLHttpRequest();
}else{
    request=new ActiveXObject("Microsoft.XMLHTTP");//ie5,6
}


// http是一种无状态的，请求过程7步
// 1 建立tcp链接
// 2 浏览器向服务器发送请求命令
// 3 浏览器发送请求头信息
// 4 服务器应答
// 5 服务器发送应答头信息
// 6 服务器向浏览器发送数据
// 7 服务器关闭tcp链接