class DefaultMap extends Map{
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }
    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
    }
}
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }
    add(text){
        text = text.replace(/\s/g, "").toUpperCase();
        for (let charactor of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count + 1);
            this.totalLetters++;
        }
    }
    toString(){
        return this.letterCounts.toString + "  " + this.totalLetters;
    }
}

async function histogramFromStdin(){
    process.stdin.setEncoding('utf8');
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    };
    return histogram;
}
// histogramFromStdin().then(histogram => {
//     console.log(histogram.toString());
// })
module.exports = {DefaultMap}; // 导出类供测试文件导入
