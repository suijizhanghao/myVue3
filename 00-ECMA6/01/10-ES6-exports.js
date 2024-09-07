const sum = (x,y) => x+y;
const square = x => x*x;

const mean = data => data.reduce(sum) / data.length;
const stddev = function (data) {
    let m = exports.mean(data);
    return Math.sqrt(sum(data.map(x => square(x - m))) / data.length);
}

// module.exports = {mean, stddev};
export {mean, stddev}
