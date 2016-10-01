/**
 * Created by suyanlong on 2016/6/11.
 */
var someObj = {
    name: "suyanlong",
    say: function (who) {
        //必须用到this指针，否则识别不到。
        console.log(this.name + "向您问好，" + who);
    }
};

var otherObj;
otherObj = {
    name: "lijie"
};

someObj.say("susan");
someObj.say.call(null, 'susan');//参数列表，借用，调用！
someObj.say.call(otherObj, 'susan');//参数列表，借用，调用！
someObj.say.apply(otherObj, ['susan']);//数组参数
