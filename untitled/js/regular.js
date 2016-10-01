/**
 * Created by suyanlong on 2016/6/11.
 * 正则表达式
 */

var str = "nihao";
var point = str.search(/h/g);

var flag = /hg/g.test('nihao');
console.log(flag);
var result = /[0-9]/m.exec("nihaosn214uyanlong ,wobushisuy4679along,shisudun");
console.log(result);
