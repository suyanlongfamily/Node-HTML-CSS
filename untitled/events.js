/**
 * Created by suyanlong on 2016/6/5.
 * Node.js事件模块学习
 * 1、记住以下事件的名字，比如，connection、close、error、newLister、open....
 */

var event = require('events');//创建事件模块句柄
var eventEmitter = new event.EventEmitter();//创建事件对象。
//新事件添加时，触发的回调函数函数。newListener
eventEmitter.on('newListener',function () {
    console.log('new event touch!');
});
//绑定connection 事件
eventEmitter.on('connection',function () {
    console.log('started connection!');
});// bind event.

//定时
global.setTimeout(function () {
    console.log('touch connection event!')
    eventEmitter.emit('connection');
},1000);
// eventEmitter.emit('connection');//touch event, param is event name.
console.log("end!")

//---------------------------------------------------------------------------------------------
eventEmitter.on('error',function () {
    console.log('there is error touch!');
});
eventEmitter.addListener('connection',function () {
   console.log('used addListener add event!');
});

global.setInterval(function () {
    console.log("event count = %d",eventEmitter.listenerCount('connection'));
},1000);



