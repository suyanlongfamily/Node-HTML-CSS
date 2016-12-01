/**
 * Created by suyanlong on 2016/6/2.
 */

// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end("hello,world!\n");
// }).listen(8888);
// console.log("http://127.0.0.1:8888/");

var std = {
    name: "suyanlong",
    year: 24,
    display : function (param) {
        console.log("参数数据是：%s", param);
    }
}
// std.setData();//放在定义之前就不行了，是一种解释性语言。由上到下，逐条语句解释的。根据文法。
std.setData = function () {
    console.log("niaho");
}
// 果然是解释性编程语言。
std.setData();
std.display(12);
// std.cancel();

