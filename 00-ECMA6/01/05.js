let matrix = [[1, 2, "aaa"], [11, 22]];
let sum  = 0, success = false;
computeSm: if (matrix) {
    for(let x = 0; x <matrix.length; x++) {
        let row = matrix[x];
        if (!row) {
            break computeSm;
        }
        if (row) {
            for (let y = 0; y < row.length; y++) {
                let cell = row[y];
                if (typeof cell !== 'number') {
                    console.error(`Non-numeric value found in row ${x} at index ${y}`);
                    success = false;
                    break computeSm;    // 可以跳出多层循环，还是比较有意义，之前的跳出可能必须通过throw才能
                }
                sum += cell;
            }
        }
    }
    success = true;
}

console.log(`Sum: ${sum}, Success: ${success}`);

breaklebal1: if (success) {
    console.log(`Sum: ${sum}`);
    break breaklebal1;
    console.log(`Success: ${success}`);
} else {
    console.error("No sum computed");
    break breaklebal1;  //break 各种代码块
    console.log(`Success: ${success}`);
}

labeli: for (let i = 0; i < 10; i++) {
    lablej: for (let j = 0; j < 10; j++) {
        if ( j >i) {
            continue labeli;
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

function* range(from, to) {
    for (let i = from; i < to; i++) {
        yield i;
    }
}
for (let i of range(1, 5)) {
    console.log(i, typeof i);
}

function factorial(x) {
    if (x < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    let f =1;
    for (; x > 1; x--) {
        f *= x;
    }
    return f;
}
console.log(factorial(7));
try{
    console.log(factorial(-2));

}catch (e) {
    console.log(e)
}
console.log(factorial(7));

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

