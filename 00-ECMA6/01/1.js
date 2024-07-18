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