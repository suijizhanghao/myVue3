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

var name = 'hello'
const obj = {
    name: 'obj',
    a: () => {
        console.log(this.name)
    }
}
const obj1 = {
    name: 'obj1'
}
console.log(obj.a())