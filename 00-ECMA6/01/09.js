function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    includes(x) { return this.from <=x && x <= this.to;},
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString() {
        return `[${this.from}..${this.to}]`;
    },
};
let r = range(1, 3);
console.log(r.includes(2));
console.log(r.toString());
console.log([...r])

// 只有函数才有propotype属性，new时会通过propotype创建对象，并继承propotype的属性
function Range1(from, to) {
    this.from = from;
    this.to = to;
}
function range1(from, to) {
    this.from = from;
    this.to = to;
}
// 如下是重写了prototype属性
Range1.prototype = {
    constructor: Range1,  // 继承constructor属性，保证了Range1和Range1.prototype.constructor是同一个函数
    includes(x) { return this.from <=x && x <= this.to;},
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString() {
        return `[${this.from}..${this.to}]`;
    }
}

let  r1 = new Range1(1, 3);
console.log(r1.includes(2));
console.log(r1.toString());
console.log([...r1])
// range1(1,2)  //node.js中不能执行，但是chrome中可以中，因为有this，且会寻找到this
console.log(range.methods.isPrototypeOf(r))

//任意一个函数都会自动有一个propotype对象，且这个对象会有constructor属性，指向函数本身
function FF(){}
console.log(FF === FF.prototype.constructor);
console.log(FF.prototype === FF.prototype.constructor.prototype);
console.log(new FF().constructor === FF);


function Range2(from, to) {
    this.from = from;
    this.to = to;
}
//这种写法下就没有重写prototype，且默认的：Range2.prototype.constructor 就等于Range2了。
Range2.prototype.toString = function() {
    return `[${this.from}]`;
}

class Range3 {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    toString() {
        return `[${this.from}]`;
    }
    static aa = 1;
    static bb = 2;
    static f1() {
        console.log(this);
    }
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
}
var a  = new Range3(1, 3);
console.log(a);
console.log(a.aa);
console.log(Range3.bb);
// a.f1();
Range3.f1();

// p 9.5.2
class EZArray extends Array {
    get first() {
        return this[0];
    }
    get last() {
        return this[this.length - 1];
    }
}

let a1 = new EZArray();
console.log(a1 instanceof EZArray);
console.log(a1 instanceof Array);
a1.push(1, 2, 3);
console.log(EZArray.isArray(a1));

class TypedMap extends  Map {
    constructor(keyType, valueType) {
        super();    // 调用父类的构造函数
        this.keyType = keyType; // this需要在super()之后调用
        this.valueType = valueType;
    }
    set(k, v) {
        if(!(typeof k === this.keyType)) {
            throw new TypeError(`${k} is not a ${this.keyType}`);
        }
        if(!(typeof v === this.valueType)) {
            throw new TypeError(`${v} is not a ${this.valueType}`);
        }
        super.set(k, v);
    }
}

// p 9.5.3
