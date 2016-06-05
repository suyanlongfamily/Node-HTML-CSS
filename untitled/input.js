var fs = require('fs');
fs.readFile("new1.txt",function (eorr,data) {
    if(eorr) return console.error(eorr);
    console.log(data.toString());    
});

console.log("程序执行结束");