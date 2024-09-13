
//11.3以前的部分
let pattern = /s$/;
console.log(pattern.test('hello'), typeof pattern);
pattern = new RegExp("s$");

let p1 = /([Jj]ava(?:[Ss]cript)?)\sis\s(fun\w*)/;
console.log(p1.test("JavaScript is funnnn"));