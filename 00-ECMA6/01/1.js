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