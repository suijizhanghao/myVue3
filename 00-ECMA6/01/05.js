;
for (let i = 0; i < 10; i++) ;

let n = 10;

if (n < 3) {
    console.log("1")
} else if (n < 5) {
    console.log("2");
} else {
    console.log("3");
}

switch (n) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("3");
}

let data = [11, 22, 33, 44, 55];
for (let  datum of data) {
    console.log(datum)
}

let data1 = {x: 1, y: 2, z: 3}
for ( let datum in data1) {
    console.log(datum, data1[datum])
}
for ( let datum of Object.keys(data1)) {
    console.log(datum, data1[datum])
}

for ( let [k, v ] of Object.entries(data1)){
    console.log(k, v);
}
let frequency = {};
for (let letter of "Hello") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency);
let wordSet = new Set("aa bb aa c d e e".split(" "));
for (let word of wordSet) {
    console.log(word);
}

let amap = new Map();
amap.set("a", 1);
amap.set("b", 2);
console.log(amap);
for (let [k, v] of amap) {
    console.log(k, v);
}

async function printStream(stream) {
    console.log("start");
    for await (let data of stream) {
        console.log(data);
    }
    console.log("end");
}
printStream("aa bbb cc @@");

let a = {x:1, y: 2}
for (let i in a) {
    console.log(i, a[i]);
}
a = [11, 22, 33];
for (let i in a) {
    console.log(i, a[i]);
}

console.log("P119");

try {
    let n = Number(prompt("请输入一个数字:"));
    console.log(n);
    debugger;
} catch (ex) {
    console.log("输入的不是数字");
}

import {abc, PI} from "./05-1.js";

abc();
console.log(PI);
