const stats = (function(){
    const sum = (x, y) => x + y;
    const squre = x => x * x;

    function mean(data) {
        return data.reduce(sum)/data.length;
    }

    /**
     * 计算给定数据数组的标准差
     *
     * @param data 数据数组
     * @returns 返回标准差
     */
    function stddev(data){
        let m = mean(data);
        return Math.sqrt(data.reduce((accum, val) => accum + (val - m)**2, 0)/data.length);
    }

    return {mean, stddev };
}());
console.log(stats.mean([1, 2, 3])); // 2
console.log(stats.stddev([1, 2, 3])); // 0.816496580927726
// ------------------------------------------------------------------
const modules = {}

function require1(moduleName) {
    return modules[moduleName];
}

modules["sets.js"] = (function(){
    const exports = [];
    exports.BitSet = class BitSet {};

    return exports
}())

modules["stats.js"] = (function(){
    const exports = [];
    const sum = (x, y) => x + y ;
    const square = x => x * x;
    exports.mean = function (data){
        return data.reduce(sum)/data.length;
    };
    return exports;
}())

const BitSet = require1("sets.js").BitSet
const aBitSet = new BitSet();
const stats1 = require1("stats.js");
console.log(stats1.mean([1, 2, 3])); // 2

//----------------------------------------------------------------
// const {a1, b2} = require("./10-ES6-exports.js");
import {mean, stddev} from './10-ES6-exports.js';
console.log(mean([1,2,3,4,5,6,100])); // 2
import BitSet1 from './10-ES6-exports-default.js';  //默认导出可以自定义名字
console.log(new BitSet1()); // BitSet {}

import * as stats2 from './10-ES6-exports.js'
console.log(stats2); // { mean: [Function: mean], stddev: [Function: stddev] }
console.log(stats2.mean([1,2,3]));

import "./10-ES6-exports-1.js"  // 导入的模块将直接执行

import {mean as mean2} from './10-ES6-exports.js'
console.log(mean2([1, 2, 11]));
import("./10-ES6-exports.js").then(
    ({mean, stddev}) => console.log(mean([1, 2, 3]))
)
