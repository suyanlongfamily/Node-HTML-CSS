/**
 * Created by suyanlong on 2016/6/5.
 * 学习数据模块。
 * http://www.runoob.com/nodejs/nodejs-buffer.html
 */

var buffer1 = new Buffer('1234');
var buffer2 = new Buffer("567890");
//concat 类方法。
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3);
console.log(buffer3.toString());
console.log("buffer3 length = %d", buffer3.length);





