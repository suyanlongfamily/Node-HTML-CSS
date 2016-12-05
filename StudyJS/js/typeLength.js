/**
 * Created by suyanlong on 2016/12/2.
 * 类型长度
 */
console.log('开始-------------');
var intToValues = function intValue(num)
{
    var MAX_VALUE = 0x7fffffff;
    var MIN_VALUE = -0x80000000;
    if(num > MAX_VALUE || num < MIN_VALUE)
    {
        return num &= 0xFFFFFFFF;
    }
    return num;
};

var num = 0x8;
num &= 0xF;

console.log(num);
// var num1 = intToValues(num);
// console.log(num1);

var num2 = 64;//     1000000 & 0001111
num2 &= 0xF;
console.log(num2);






