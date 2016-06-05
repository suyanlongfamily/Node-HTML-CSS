/**
 * Created by suyanlong on 2016/6/5.
 * 模块系统学习。
 * 我们只需知道三点即可知道 exports 和 module.exports 的区别了：
 1.exports 是指向的 module.exports 的引用
 2.module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
 3.require() 返回的是 module.exports 而不是 exports
 * //NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports
 */
var hello = function () {
    console.log("hello!");
}

var add = function (a,b) {
    return a+b;
}

// exports.add = add;
// exports.hello = hello;
module.exports.hello = hello;
exports.add = add;
