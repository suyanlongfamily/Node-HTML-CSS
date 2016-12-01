/**
 * Created by suyanlong on 2016/10/1.
 * 学习js里面继承的知识点。
 *
 */
// 直接定义对象！
var student = {
    name: 'suyanlong',
    age: 25,
    phone: '15286629772',
    disPlay: function () {
        console.log('name=%s，phone=%d', this.name, this.age);
        /*必须添加this  对象*/
    }

};
student.disPlay();
/*函数调用*/

/*定义构造函数*/
function CreatBoject(name, age) {
    // CreatBoject.prototype.name = name;
    // CreatBoject.prototype.age = age;
    CreatBoject.prototype.constructor = CreatBoject;
}

/*第一种情况*/
var ob = new CreatBoject('张三', 23);
console.log('name=%s，phone=%d', ob.name, ob.age);
CreatBoject.prototype = student;
/*覆盖原型对象*/

/*根据程序从上之下，顺序执行原则，覆盖原型后，已经new的对象不受影响*/
console.log('name=%s，phone=%d', ob.name, ob.age);

var ob1 = new CreatBoject('李四', 32);
console.log('name=%s，phone=%d', ob1.name, ob1.age);

/*/!*第二种情况*!/
 function CreatBoject(name,age) {
 // CreatBoject.prototype.name = name;
 // CreatBoject.prototype.age = age;
 //CreatBoject.prototype.constructor = CreatBoject;
 }

 var ob = new CreatBoject('张三',23);
 console.log('name=%s，phone=%d',ob.name,ob.age);
 CreatBoject.prototype = student;/!*覆盖原型对象*!/
 console.log('name=%s，phone=%d',ob.name,ob.age);

 var ob1 = new CreatBoject('李四',32);
 console.log('name=%s，phone=%d',ob1.name,ob1.age);*/


/*临时构造函数法
 * param o 父对象
 *
 * */
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();//原型对象,已经被悄悄替换了，但是，仍然和原来的原型对象一样的属性，值却不一样。
}


/*寄生式继承！*/
var twoD = {
    name: '2D shaoe',
    dimensions: 2
};

function triangle(s, h) {
    var that = object(twoD);
    that.name = 'triangle';
    that.getArea = function () {
        return this.side * this.height / 2;
    };
    that.side = s;
    that.height = h;
    return that;
}
// 心得：只要符合语法规则、规范，就可以运行，这仅仅是针对“定义”的代码来说的。
// var t = triangle(5, 10);
var t = new triangle(5, 10);
console.log(t);
t.getArea();

/*针对动态型的语言，什么是定义，什么是声明，现在终于明白了，能被执行的代码语句就是定义语句，和编译型语言区别开来！
 * 声明语句，见如下体会！
 * */

/*以下就是声明一个函数，因为，写在这里的函数只有被调用时才执行！，所以调用语句是定义！*/
function test() {

}
test();//定义语句。
var test;//声明一个变量，声明语句。
var test1 = 1;//声明一个变脸，并赋值！，定义语句。
//明白以上语句就知道，什么是定义语句，什么是声明语句！针对JS这种动态型语言，要和C++ 、C 语言区别开来！这个是根据运行时判断的！


function isArray(obj) {
    // return Array.isArray(obj);
    var p = Array.isArray;
    /**
     *
     * 这个就表明，验证了一句话，对象永远真。
     */
    if (p) {
        console.log(true);
    } else {
        console.log(false);
    }
                                                                                                                                                                                                                                    
    return Array.isArray(obj) ? Array.isArray : Object.prototype.toString.call(obj) === '[object Array]';
}
var array = ['fdsa', '', '213'];
var noarray = 32;
console.log(isArray(array));
console.log(isArray(noarray));

/**
 *
 * 1 空字符串、null、undefined、数字0、数字NaN、布尔值false，6六个值在转换成布尔类型的时候都为false
 * 其他基本值、对象转换成布尔类型时为true。
 *
 */
var falsey = "";
falsey = null;
falsey = undefined;
falsey = NaN;
falsey = 0;
falsey = false;

falsey = "dasf";//字符床。
falsey = isArray;//函数对象。
falsey = student;//普通对象。
if (falsey) {
    console.log("falsedddd");
} else {
    console.log("trueddddd");
}

