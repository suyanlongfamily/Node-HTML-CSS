/**
 * Created by suyanlong on 2016/6/5.
 */
var http = require("http");//引入http模块句柄
var fs = require('fs');//引入文件读写模块句柄
var url = require('url');//引入解析URL 模块。
var server = http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    console.log("requset for " + pathname + " recevied.txt ");
    fs.readFile("./recevied.txt",function (err,data) {
        if(err){
            console.log(err);
            res.writeHead(404,{'Content-type':'text/html'});

        }else {
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    })
});
server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');


