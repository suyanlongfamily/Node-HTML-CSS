/**
 * Created by suyanlong on 2016/6/5.
 * 路由，服务函数。
 */

var http = require('http');
var url = require('url');
exports.start = function (route) {
    http.createServer(function (req, res) {
        var pathName = url.parse(req.url).pathname;
        console.log("request for" + pathName + "received");
        route(pathName);//进行url路由。关键在这一点，函数最为对象在几个函数间通过参数或者作为返回值进行传递。

        
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("hello world");
        res.end();
    }).listen(8888);
    console.log("server has started.");
};




