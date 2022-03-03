let city: string;
city = '张三';
console.log(city);

let num: number;
// num = '123'; // 报错 num是一个number类型的变量，不能赋值string类型
num = 123;
console.log(num);

function hello(): void {
  console.log("hello");
}
hello();

function hello1(): number {
  return 666
}
console.log(hello1());

class Person{
  name: string = '张三'
  static age: number = 12
}

const per = new Person()

console.log(per)

class pp{
  private name:string  = '123'
}

class Ani{
  name: string;
  constructor(name: string){
    this.name = name
  }
}
