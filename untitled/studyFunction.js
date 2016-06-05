function test(a, b) {
    return c = a + b;
}

function one() {
    console.log("第一个函数");
}

function two() {
    console.log("第二个函数");
}

function add(a, b) {
    a();
    b();
}

//函数名作为参数
add(one, two);

console.log("----------------------------------------------------------------------------");

//使用匿名函数
add(
    function () {
        console.log("nihao");
    },
    function () { console.log("nihao2"); }
);//直接调用

//即时函数。这个很重要！
(function () { console.log("即时函数打印！") })();
//即时函数，用于初始化工作，一次执行，除非放到循环中。
// vs  两种做法同样
(function() { console.log("即时函数打印！") } ());

//内部函数，私用函数。
function outer(param){
    //函数内部定义一个函数。私用函数。C 与C++  就不可以。
    function inner(thatParam){
        thatParam *= 3;
        return thatParam;        
    }
    
    return "这是大函数处理的结果" + inner(param);        
}
var param = 100;
console.log("---",outer(param));

//返回函数的函数。
(function a(){
    console.log("函数11111111111111111111");
    return function(){console.log("函数222222222222222");};       
})()();
// var aa = a();//aa得到的返回值是一个函数；
// aa();
// a()();
//function deal( var param){}  函数形参加一个var 变量声明关键字，是不行的。

function deal( param){
    console.log(param);
}
deal(22222222222);

deal.say = function(){
    console.log("-------------fangfangnadfs----苏彦龙");
}

deal.say();//js 一切皆对象。

console.log("================");

function Animal(name){
    this.name = name;    
}

Animal.color = "black";
Animal.prototype.say = function(){
    console.log("I'm" + this.name);
}
console.log(Animal.name,Animal.color);


var user = function(){
  this.name="";
  this.id="";
};
user.add = function(){
  console.log("add素颜龙");
};
user.delete = function(){
  console.log("delete");
};
user.prototype = user;//函数的原型就是自己。怎么理解？？？
//new 出来的对象
user1 = new user();
user2 = new user();

user1.add();
user2.add();







