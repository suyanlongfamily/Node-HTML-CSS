var http = require('http');
var tmp = 2+3;
console.log(tmp);
console.log(tmp);
console.log(tmp);
console.log(tmp);
console.log(tmp);
console.log(tmp);
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello world\n');
}).listen(8888);

console.log('server runing at http://127.0.0.1:8888/');
