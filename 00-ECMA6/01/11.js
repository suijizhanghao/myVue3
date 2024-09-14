let s = new Set();
let t = new Set([1, 2, 3]);
let unique = new Set('Mississippi');
console.log(unique)
console.log(unique.keys())
unique.add('1').add('2').add('3')
console.log(unique)
console.log(unique.has('Mississippi'))
for (let i of unique) {
    console.log(i);
}
console.log(...unique)
console.log(new Array(...unique));
unique.forEach((key) => console.log(key+'a'));

let m = new Map();
let m1 = new Map([['1', 111], ['2', 222]]);
console.log(m1)
let o = {a:1, y: 2}
console.log(Object.entries(o))
let m2 = new Map(Object.entries(o))
console.log(m2)
console.log(m2.get('a'));
console.log(m2.set('c', 333));
console.log(m2);
console.log(m2.delete('c'));
console.log({} == {});
console.log({} === {});

console.log(...m2);
for (let [key, value] of m2) {
    console.log(key, value);
}

console.log(...m2.entries())

m2.forEach((value, key) => console.log(key, value));

//--------------------------
let a1 = new Int8Array(10);
console.log(a1);
a1[1]=11111111111111111;
console.log(a1);

//11.3以前的部分
let pattern = /s$/;
console.log(pattern.test('hello'), typeof pattern);
pattern = new RegExp("s$");

let p1 = /([Jj]ava(?:[Ss]cript)?)\sis\s(fun\w*)/;
console.log(p1.test("JavaScript is funnnn"));

console.log('JavaScriptScript'.search(/S/))
console.log('javascript abcd'.replace(/(?<n1>javascript)/gi, "$<n1> ==> JavaScript"))

'1 + 1 = 2'.replace()