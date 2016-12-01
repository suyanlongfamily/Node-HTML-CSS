// jscs:disable
/**
 * Created by suyanlong on 2016/6/5.
 * Node.js文件模块学习
 */




var fs = require('fs');
fs.readFile("new1.txt",function (eorr,data) {
    if(eorr) {
        console.error(eorr);
        return;
    }
    // jscs:ignore

    console.log(data.toString());    
});

console.log("niaho");
console.log("程序执行结束");//先执行这一步，
console.log("程序执行结束");//先执行这一步，

