/**
 * Created by suyanlong on 2016/10/14.
 *
 * String 字符串的学习。
 */
var obj;
obj = new String('sdafSSDS12312Ddsgfds');
console.log(obj);//打印的是一个对象。
// obj = String('12312');
// console.log(obj);//打印的是一个值
// console.log('342');
var src = obj.toString();
src = obj.sub();
src = obj.toLocaleLowerCase();

// src = obj.toSource();node.js里面没有。
src = obj.toString();
src = obj.valueOf();
src = obj.strike();
src = obj.valueOf();
src = obj.bold();
src = obj.link();
src = obj.replace('SSDS','{suyanlong}');
src = obj.search(/\d+/);//返回值 索引！！！
obj = 'sdfds sdaf dasf sadffadsf sdsaf';
src  = obj.split(' ');//分隔字符串！
console.log(src);




