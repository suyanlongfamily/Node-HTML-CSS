/**
 * Created by suyanlong on 2016/10/24.
 * nodeJS中的一些全局对象。
 */

// console.log(__filename);/*当前执行文件，所在的全路径。*/
// console.log(__dirname);/*当前执行文件，所在的目录。*/

// console.log(console);
// console.log(process);
// console.log(global);
// console.log(Buffer);
//console.log(require.toString());//这样可以观看源代码。
// console.log(require);
//
// console.log(exports);
// console.log(setTimeout.toString());//通过这个形式可以查看源代码。


/***
 * 再次看看事件，NodeJS 中存在一些预定义事件，以及模块预定的模块，如：newListener、removeListener等。当然，我们也可以自己定义事件，然后选择出发。
 * 这里的事件，就是字符串绑定一个或者多个回调函数。
 */

// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected(agr) {

    console.log(agr);//第一个参数值。
    console.log('connection succesful.');
    console.log(arguments);

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
});

// Fire the connection event
/**
 *emit(event, [arg1], [arg2], [...])
 *为了与提供的参数执行每一个监听器。如果事件有监听器返回true，否则为false。
 * 也就是说，会把这些参数一一传递给监视器函数。
 * 顺便说一下，JS里面的函数参数个数其实已经没有多大的意义了。
 * 我们可以通过arguments 获取实际的传递过来的参数，哪怕实参与形参个数不符合时。
 */
eventEmitter.emit('connection','asd','fasdf','qwre');
console.log("Program Ended.");
var fs = require('fs');
fs.readFile( __dirname + "\\index.js",function (erro,data) {
    if(erro){//如果erro,为真，则表示有错误信息。
        console.log(erro);
        return;
    }
    console.log(data.toString());
});





