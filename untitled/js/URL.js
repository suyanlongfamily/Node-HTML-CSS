/**
 * Created by suyanlong on 2016/6/9.
 * 理解url、queryString 之间的关系。理解javascript的对象，框架自带对象的字段，
 * Url 表示个url对象。
 */
var url = require('url');
var queryString = require('querystring');

var urlString = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
var result = url.parse(urlString);//url.parse();返回值是一个解析好的对象实例。
console.log(result);
var paths = url.parse(urlString).pathname.split('/');

//  result = url.parse(urlString,true);//url.parse();返回值是一个解析好的对象实例。
// console.log(result);

//  result = url.parse(urlString,true,true);//url.parse();返回值是一个解析好的对象实例。
// console.log(result);

result = queryString.parse(result.query);
console.log(result);




