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
    names: "lijie"
};

someObj.say("susan");
someObj.say.call('susan');//参数列表，借用，调用
someObj.say.call(null, 'susan');//参数列表，借用，调用！
someObj.say.call(otherObj, 'susan');//参数列表，借用，调用！
someObj.say.apply(otherObj, ['susan']);//数组参数  第一个参数代替this,如果对象里没有对应的属性就会报undefined.

function fun() {
    var agr = [].slice.call(arguments);
    console.log(agr);
}
/*不需要，形参也可以获取到参数！*/
fun(1,2,3,4,5,6,7);
console.log(12);
console.log(fun.constructor);

function shallowCopy(src, dst) {
    dst = dst || {}; //dst || {} 表达式中操作数，第一个为真的值。赋给dst变量。
    for(var key in src) {
        // shallowCopy is only ever called by $compile nodeLinkFn, which has control over src
        // so we don't need to worry about using our custom hasOwnProperty here
        if (src.hasOwnProperty(key) && key.charAt(0) !== '$' && key.charAt(1) !== '$') {
            dst[key] = src[key];
        }
    }
    return dst;
}

src1=[1,2,3,4,5,6];
var dst1 = [];
// shallowCopy(src1,dst1);
// func.apply(thisForFunc || func, objects)
// shallowCopy.apply(fun,[src1,dst1]);//这种形式也可以用。
// shallowCopy.apply(null,[src1,dst1]);//这种形式也可以用。

var undf;
// shallowCopy.apply(undf || shallowCopy,[src1,dst1]);//这种形式也可以用。
shallowCopy.apply(undf,[src1,dst1]);//这种形式也可以用。
console.log(dst1);
/*----------------------------------------------------------------------------------------------------*/
function aslist(as){
    this.sum = 0;
    for(var i =0 ; i < 100 ; ++i){
        as += i;
    }
    this.sum = as;
    return as;
}
var otherFun = function (){};
console.log(aslist(1));
console.log(aslist.apply(undf,[1]));
console.log(aslist.apply(otherFun,[1]));
console.log(aslist.apply(aslist,[1]));
console.log(aslist.apply(null,[1]));
console.log(aslist.apply(Object,[1]));

/*
* 1、构造函数里面，想要是作为是成员属性必须是this.***，因为构造函数默认（隐含）返回this,当然，也可显示返回一个对象。
* 2、作为构造函数，实例的对象含有的属性就是绑定在this对象上的，如果绑定就不会被添加。！！！！一定要记住！
*
*
* */

/*直接定义一个对象！！！*/
var stutest = {
    name:"adsf",
    year:23,
    fun:function () {
        //this.name
        name = 'sadf';
    }
};
function Student(_name,_year){
    this.name = _name;//必须加this,因为后面apply、call时，第一个参数就是替换这个this的。如果没有添加，就不会返回了。
    this.year = _year;
}
var stu = new Student('fdas',12);
var stest = {};
Student.apply(stest,['sdf',12]);//这种方式相当于，构造函数复用！stest会带有，Student类的属性。这中是构造器借用！
console.log('--------------------------------');

/*JS里面的对象的继承手段还是要多学习一下呢。
 *
 * 返回一个函数对象。这个函数对象还可以使用上层函数里面的东西。
 */
function CreatFun(agr1,agr2,agr3){
    var kk = "苏彦龙";
    return function (test2,agr1) {
        //私有函数形参与外函数形参一致时。
        // 这里可以看出，还是区分形参与实参的!!!,最近使用原则！
        // 其实，形参可以当作函数的内部的局部变量对待，实际也就是这样的。
        var kk = 'fasdfads';//最近使用原则！！！
        console.log(kk);//闭包的使用。
        console.log(agr1);
        console.log(agr1);
        console.log(agr2);
        console.log(agr3);
        console.log(test2);
    };
}

/*针对输出一定要理解，函数的传参，闭包的作用！！！值得学习！！！*/
var some = CreatFun(12,33,4);//some 是一个函数对象！！！一定要理解！
some('adsf');//函数对象内部保留了有父函数对象的信息！所以，函数也是对象！！！一点也不为过。
var some1 = CreatFun('--','===','++');//some 是一个函数对象！！！一定要理解！
some1('///','....');
some('adsf');
// 下面是输出。
// --
// ===
// ++
// ///
// ....
// 12
// 33
// 4
// adsf
// das

/**
 * 返回一个函数对象
 * 这个函数对象的形参可以用上层函数的形参吗？？？
 *
 */






























