let emypt = [];
let primes = [,2,,3,4,5,6];
let misc = [1.2, true, "a"];
console.log(primes, ...misc, primes.length);
primes.forEach(function (item, index) {
    console.log(item, index);
});
let letters = [...'hello world'];
console.log(letters);
console.log("===================");
let a = new Array(...letters);
a.forEach(function (item, index) {
    console.log(item, index);})
console.log(a[111],a.length);

a = Array.of(1, 2, 3, 1, 1, 1, ...a);
console.log(a);

a = Array.from(a);
console.log(a)

a= []
a[100] = 2;
a["1.1"] = 3
console.log(a.length)

a = [1, 2, 3, 4, 4, 5, 6];
console.log(a)
a.length = 3;
console.log(a)
a.push(10);

 letters = [...'hello world'];
for (let [i, l] of letters.entries()) {
    console.log(i, l);
}
console.log("=====================")
letters.forEach(function (item, index, thisArr) {
    console.log(item, index, thisArr);
});
a = [1, 2, 3, 4, 5,6,7,8];
var b = a.map(function (item, index, thisArr) {
    return item * 2;
});
console.log(a, b)

b = a.filter(function (item, index, thisArr) {
    return item % 2 === 0;
});
console.log(a, b)
console.log(a.find(item => item % 2 === 0));
console.log(a.every(item => item < 10));
console.log(a.reduce(function (prev, item) {
    return prev + item + "A";
}, 0));

console.log([1,2,[3,4,[5,6]]].flat(4))
console.log([1, 2, 3].push([11, 22]));
a = [3,1, 2, 3, 2, 3, 4, 5, 3, 4];
var index = -1
do {
    index = a.indexOf(3, index+1);
    if (index !== -1) {
        console.log("aa:", index, a[index])
    }
} while (index !== -1)
console.log(a.sort(function (a, b) {
    return a - b;
}));
Array.of()