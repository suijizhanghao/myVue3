const map = new Map();
map.set('id', '1');
map.set('name', 'mac');
for (let [key, value] of map) {
    console.log(key + ": " + value);
}

for (let [key] of map) {
    console.log(key)
}
for (let [,value ] of map) {
    console.log(value)
}

console.log("\uffff")

for (let codePoint of 'foo') {
    console.log(codePoint)
}

let text = String.fromCodePoint(0x20bb7);
for (let i =0; i< text.length; i++) {
    console.log(text[i]);
}

for (let i of text) {
    console.log(i)
}
let name = "li";
let text1 = `Hi ${name + name }`;
console.log(text1);

function fn1() {
    return "hi!"
}
console.log(`${fn1()}`)

const tmp1 = addrs => `
<table> 
    ${addrs.map(addr => `<tr>${addr.first} + ${addr.last}</tr>`).join("")}
</table>
`;
const data = [{first: "f1", last: "l1"},
    {first: "f1", last: "l2"}];
console.log(tmp1(data));


let func = (name) => `Hello ${name}`;
console.log(func("jack!"));

let data1 = {key1: {name: "key11"}};
console.log(data1.name?.name);
console.log(data1.key1?.name)
console.log(data1.key1?.name?.name);
String.raw`123`

const pluse1 = x => x+ 1
console.log(pluse1(3))

points = [{x: 2, y: 3}, {x: 5, y:8}]
points.dist = function () {
    let p1 = this[0]
    let p2 = this[1]
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b)
};
console.log(points.dist());

function sum(array) {
    // return array.reduce((a, b) => a + b);
    let sum = 0;
    for ( let x of array ) {
        sum += x;
    }
    return sum;
}

console.log(sum([1,2,3,4,5,6]));

function factorial(n) {
    return n < 2 ? 1 : n * factorial(n-1);
}
console.log(factorial(9));

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    };
}
let p = new Point(1, 2);
console.log(p.distance());

class ColorPoint extends Point {
    constructor(x, y) {
        super(x, y);
        this.color = "red";
    }
}
// ai zhende hui biancheng

// @home
Math.pow(3,)
let aDate = new Date();
let bDate = Date();
let cDate = Date.now()

let sym1 = Symbol("sym1");
let sym2 = Symbol("sym2");
let k3 = "k3";
let o1 = {
    [sym1]: "sym1",
    [sym2]: "sym2",
    [k3]: "k3",
    "k4": "k4"
};
console.log(o1)
o1 = {"k1": 1 , [Symbol("k2")]: 2}
console.log(o1)
console.log(sym1.toString())
console.log(sym1.toString())

undefined === undefined
NaN === NaN

let data2 = [1,2,3];
let data3 = "data3"
for (const dataI in data2) {
    console.log(data4);
    console.log(dataI);
    var data4 = 1;
}

console.log(data4);

let a = {b: null};
console.log(a?.b);
console.log(a?.b?.c);

{
    try {
        let a;
        let index = 0;
        // a?.[index++] = 1;
        console.log(a, index);
        a[index++] = 2;
        // console.log(a, index);
    } catch (e){
        // console.log(e);
    }
}

{
    let log = x => { console.log("x=" + x ); return x; };
    // log = null;
    function square(x, log) {
        log?.(x)
        return x * x;
    }

    console.log(log?.(square(3)));
    console.log(log?.aa);
}
{
    let x ;
    let a = x ?? 1;
    console.log(a)
}

console.log("P65")
let f = null, x =0;
try {
    f(x++);
} catch (e) {
    console.log(e);
        console.log(x);
};
f?.(x++);
console.log(x);

console.log("P92");
let data111 = [7, 8, 9];
console.log(data111[0] ?? 1);

console.log("P81");

function abc(a, p = {}) {
    console.log(a, p);
}

abc();

console.log(1 < 2 ? "aa" : "bb");
console.log(11 ?? 33);
console.log(null ?? 3);
console.log(undefined ?? 22 ?? 33)

console.log(typeof(null));