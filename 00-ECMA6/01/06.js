let a = Object.create(Object.prototype);
a.addredss1 = "1";
a.addredss2 = "2";
a.addredss3 = "3";
for (let key in a) {
    console.log(key, a[key]);
}

let o1 = Object.create({x:1, y: 2})
console.log(o1.prototype)

let o = {x:1, y:{z: [false, null, ""]}, z : new Date()}
let s= JSON.stringify(o);
console.log(s);
let p = JSON.parse(s);
console.log(p);
console.log(typeof (p.z));

console.log([1,2,3].toLocaleString())

console.log([1,2,3].toString())
console.log({o,s})

const PROPERTY_NAME = "p1";
function computePropertyName(){
    return "p" + 2;}

let o2 = {}
o2[computePropertyName()] = 1;
o2[PROPERTY_NAME] = 2
console.log(o2)
let o3 = {
    [computePropertyName()]: 1,
    [PROPERTY_NAME]: 2
}
console.log(o3)

// P150  6.10.3
const extension = Symbol("abcd abcd");
Symbol.for("aa");

let position  = {x:1, y :2}
let dimensions = {w:3, h:4}
let rect = {...position, ...dimensions}
console.log(rect)

rect.x = function (){console.log("x")}
console.log(rect.x)
rect = {...rect, area(){return "aaaa";}}
console.log(rect)
console.log(rect.area())
rect = {...rect, "method With"(x){console.log(x);}}
rect["method With"](22)

p = {
    x: 1.0,
    y: 1.0,
    get r() {
        return Math.hypot(this.x, this.y);
    },
    set r(newValue) {
        const oldValue = Math.hypot(this.x, this.y);
        let ratio = newValue / oldValue;
        this.x *= factor;
        this.y *= factor;
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    },
};
console.log(p)
console.log(p.r)
console.log(p.theta)
// p.theta = 11;
