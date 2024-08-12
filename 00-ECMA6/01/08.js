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