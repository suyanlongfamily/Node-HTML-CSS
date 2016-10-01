/**
 * Created by suyanlong on 2016/9/30.
 */

//直接创建一个对象。不需要任何类，可以像C语言的结构体一样。
var student = {
    name: 'suyanlong',
    age: 25,
    display: function () {
        console.log('nihao');
    }
};
student.display();

function F() {

}

F.prototype = student;
var f = new F();
f.display();

student.say = function () {
    console.log('shuohua');
}
f.say();


/*-------------------------------------------------------------------------*/

// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end("hello,world!\n");
// }).listen(8888);
// console.log("http://127.0.0.1:8888/");

var v1 = []
var v2 = {};
var v3 = {ss:43};

function foo(v1, v2, v3)
{
    v1 = [1];
    v2 = [2];
    v3 = {a:3}
}

foo(v1, v2, v3);
console.log(v1); // 空白
console.log(v2); // [object Object]
console.log(v3.a); // undefined

function foo1(v11, v22, v33){
    v22.test = 23;
    v33.test = 32;
}

console.log("---------");
foo1(v1, v2, v3);
console.log(v1); // 空白
console.log(v2);
console.log(v3);
console.log("---------");

var pram = {
    name:"suyanlong",
    year:26
};
console.log("---------");
console.log(pram);
var pram1 = pram;
console.log(pram);

pram1.kk = 23;
console.log("---------");
console.log(pram);
console.log(pram1);

pram1 = {
    er:900
}
console.log("---------");
console.log(pram);
console.log(pram1);
//这是什么原因？？

/*学习exports 与 module.exports 的区别。其实就是指针的只指向关系！！！
* 1、exports  = module.exports;
* 2、module.exports = &var;
* 3、返回的是module.exports;
*
* 总结，
* */
var ms = require("./mudleStudy.js");
ms.hello();
console.log("nihao");







