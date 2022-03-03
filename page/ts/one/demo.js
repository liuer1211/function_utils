var city;
city = '张三';
console.log(city);
var num;
// num = '123'; // 报错 num是一个number类型的变量，不能赋值string类型
num = 123;
console.log(num);
function hello() {
    console.log("hello");
}
hello();
function hello1() {
    return 666;
}
console.log(hello1());
var Person = /** @class */ (function () {
    function Person() {
        this.name = '张三';
    }
    Person.age = 12;
    return Person;
}());
var per = new Person();
console.log(per);
var pp = /** @class */ (function () {
    function pp() {
        this.name = '123';
    }
    return pp;
}());
