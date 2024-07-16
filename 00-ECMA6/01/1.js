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