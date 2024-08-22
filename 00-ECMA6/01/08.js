function myfun1() {
    console.log("myfun1");
}
myfun1.v1 = 2
myfun1.v2 = 3;
console.log(myfun1)

function printprops(object) {
    for (let p in object) {
        console.log(`${p}: ${object[p]}`);
    }
}
printprops(myfun1)

const fun1 = function(x) {
    return x * x;
}
const f = function fact(x ) {
    if (x<=1) {
        return  1;
    } else {
        return x * fact(x-1);
    }
}
console.log(fun1(10));
console.log(f(10));
console.log( [2,3,4,1,2,3,2,1].sort(function(a,b) {if (a<b) return -1; return 1;}))
console.log( (function(x) {return x*2;}(10)))
const sum = (x,y ) => {return x+y;}
console.log(sum(10,20))
const sum1 = x => x*2;
console.log(sum1(20))
const sum3 =() => 2;
console.log(sum3())

const f0 = x => {console.log(this); return {value: 2} ;};
const f1 = x => ({value: 2});
const f2 = x => {value :3};
const f3 = x => ({v:1, vv:2})
console.log(f0(1), f1(2), f2(3), f3(4))
console.log(fun1?.(2));
// console.log(summmm?.()); // 为什么会报错呢？
console.log(sum?.fun1?.());
console.log(sum?.toString?.());
// console.log(sum?.fun1());

function max(first = -Infinity, ...reset) {
    let maxValue = first;
    for (let n of reset) {
        if (n >= maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}

console.log(max(1, 2, 4, 666, 56));
console.log(max(...[22,33,11,44,66,55]));

function vectorMultiply({x, y}, scalar) {
    return { x: x*scalar, y: y * scalar}
}
console.log(vectorMultiply({x:2,y:3}, 3));

function funJieGOou([x, y, ...coords], ...reset) {
    return [x+y, ...coords, ...reset];
}

console.log(funJieGOou([1, 2, 3, 4, 5], 5, 6));

var square = function(x) {
    console.log(x*x)
}
var s = square
s(2.2)
square(2.2)

o = {squareKey: square}
o.squareKey(2.2)
var a = [square, x => x*x];
a[0](2)
console.log(a[1](2));


function uniqueInteger() {
    return uniqueInteger.counter++;
}
uniqueInteger.counter = 0;
console.log(uniqueInteger());
console.log(uniqueInteger());
uniqueInteger[0] = 0;
uniqueInteger[1] = 1;
console.log(uniqueInteger);
console.log(uniqueInteger["0"]);
console.log(uniqueInteger[1]);

let scope = "global scope";

function checkscope() {
    let scope = "local scope";
    function f() {
        return scope;
    }

    return f();
}
console.log(checkscope());

function checkscope1() {
    let scope = "local scope";
    function f() {
        return scope;
    }

    return f;
}
console.log(checkscope1()());

let uniqueInteger1 = (function(){
    let counter = 0;
    return function() {
        return counter++;
    }
}());
console.log(uniqueInteger1());
console.log(uniqueInteger1());

function counter () {
    let n = 0;
    return {
        count: function() {
            return n++;},
        reset : function() {n =0;}
    }
}
let cc = counter();
console.log(cc.count());
console.log(cc.count());
console.log(cc.reset());
console.log(cc.count());

function counter1(n) {
    return {
        get counter() {return n++;},
        set count(m) {n = m;}
    }
}
console.log("===========")
var abc = counter1(2);
console.log(abc.counter);

// P 8.7函数属性/方法 和构造函数
console.log("===========")

var name = 'hello'
const obj = {
    name: 'objjjj',
    a: () => {
        console.log(this.name)
    },
    b: function() {
        console.log(this.name)
    }
}
const obj1 = {
    name: 'obj1'
}
try {
    obj.a()  // 箭头函数的this是调用时的上下文的this，在chrome，返回hello，在node.js中没有这个，所以打印出hello，因为this好似时没有的
} catch (error) {
    console.log(error);
}
//箭头函数的this指的是叫用方的this。对于闭包的变量的作用域指的是代码定义时的变量，所以才能成为隐私的内部变量。
obj.b()
console.log(obj.a.length,obj.a.name)

function bar(a,b){
    console.log(this,this.value, a ,b );
}
let foo = {value: 2}
bar.call(foo, 11,22) // 相当于修改了this的指向为foo
bar.apply(foo, [11,22]) // 相当于修改了this的指向为foo

function bindF(y) {
    return this.x + y;
}
var o = {x: 1}
var g = bindF.bind(o);  //bind相当于指定下this，和call，apply好似是类似的效果？
console.log(g(5)); //bind绑定的结果是个函数，需要调用下；而call/apply直接是执行了，这就是区别，且需要输入参数
console.log(g,g.toString()); //bind
console.log(bar,bar.toString()); //bind

var data1 = [1, 1, 3, 5, 5];
console.log(data1.reduce((x, y) => x + y));
console.log(data1.map((x => x * 2)));
//javaScript 的函数编程实在太太难了
