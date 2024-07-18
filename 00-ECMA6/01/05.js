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

