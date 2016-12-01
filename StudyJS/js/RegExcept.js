/**
 * Created by suyanlong on 2016/10/13.
 * 正则表达式学习！
 */

var reg ;
// reg = /[0-9]*/gi; *
reg = /\d*/gim;/* // 不能有空格！*/
reg = /\d+/gim;
reg = /\d?/;
reg = /\d?\d?\d?/;

reg = /\D*/gim;
reg = /\D+/gim;
reg = /\D?/gim;


reg = /\w*/;

reg = /^\d+$/;
var str = '';
str = reg.exec('132123sd$@%32#4@*23fdasf');

reg = /^The/;
str = reg.exec('The some Thehello world!');

reg = /world$/;
str = reg.exec('The some Thehello world');


reg = /ab*/;
str = reg.exec('The some Thehello world');
console.log(str);
/*过滤字符串、筛选字符串、以及匹配字符串、检索字符串
* 放到代码中理解这句写话。
*
* */


var arrgy = ["132312","adsf3","413@#","ADSF","23FD3#"];

function parten(agr) {
    for (var key in agr){
         reg = /^\d+/;
        console.log(reg.exec(agr[key]));
    }
}
parten(arrgy);
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ss = parten.toString().replace(STRIP_COMMENTS,'');

var sss = "sdfa";



var osVersion = "Ubuntu 8";//其中的8表示系统主版本号
var re = /^[a-z]+\s+\d+$/i; //+号表示字符至少要出现1次,\s表示空白字符,\d表示一个数字。即完整匹配 表示一个或多个字符 + 一个或多个空白符 + 一个或多个数字组合的字符串。
console.log(re.test(osVersion));//true,但我们想知道主版本号
//另一个方法exec,返回一个数组,数组的第一个元素为完整的匹配内容
re=/^[a-z]+\s+\d+$/i;
arr = re.exec(osVersion);
console.log(arr[0]);//将osVersion完整输出,因为整个字符串刚好匹配re
//我只需要取出数字
re=/\d+/;
var arr = re.exec(osVersion);
console.log(arr[0]);//8
var id_code = '411024199004191617';
reg = /^(\d{6})(\d{8})(\d{4})$/gi;
console.log(reg.exec(id_code));

var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{2})(\d{4})$/;
var info = id_code.match(re_fifteen);//如果不匹配就会返回null。


reg = /[a-z]+/gi;
console.log(reg.exec('adsf132')); //抽离出字符。
reg = /([0-9]+)/gi;
console.log(reg.exec('adsf132')); //抽离出数字。

/*
* 正则表达中，“()”括号的作用！！！值得学习。
*
* */



/*怎么解析一个字符串，分隔字符串，拆分字符串*/







