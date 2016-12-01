/**
 * Created by suyanlong on 2016/6/8.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

var server;
server = http.createServer(function (req, res) {
    try {
        console.log("http request...");
        var pathName = url.parse(req.url).pathname;
        // var file = pathName.split('/');//split() 返回一个数组。
        console.log(pathName);
        switch (req.method) {//根据请求方法进行路由
            case "GET":
            {
                fs.readFile('./..' + pathName, function (erro, data) {
                    if (erro) {
                        return;
                    }
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data.toString());
                    res.end();
                });
                break;
            }
            case "POST":
            {
                var data = "";
                req.on('data', function (dunk) {
                    data += dunk;
                });
                req.on('end', function () {
                    console.log(data);
                });
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end();
                break;
            }
        }

    } catch (e) {
        console.log("http request. erro");
    }


});
server.listen(8989);
console.log("server start!");
