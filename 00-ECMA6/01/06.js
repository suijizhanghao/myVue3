let a = Object.create(Object.prototype);
a.addredss1 = "1";
a.addredss2 = "2";
a.addredss3 = "3";
for (let key in a) {
    console.log(key, a[key]);
}
