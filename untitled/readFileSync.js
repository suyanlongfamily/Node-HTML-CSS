/**
 * Created by suyanlong on 2016/6/5.
 */
var file = require('fs');

var data = file.readFileSync('new1.txt');//异步读取文件。
console.log(data);//需要转化一下，才能显示显示正确的编码格式。
console.log(data.toString());
