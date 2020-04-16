function Animal(name) {
  // 属性
  this.name = name || "Animal";
  // 实例方法
  this.sleep = function () {
    console.log(this.name + "正在睡觉！");
  };
}
// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + "正在吃：" + food);
};

//1.原型链继承

// function Cat() {
//     this.age=100;
// }
// Cat.prototype = new Animal();
// Cat.prototype.name = "cat";
// var cat = new Cat();

//1.instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// console.log(cat instanceof Cat,cat instanceof Animal)

// console.log(am.prototype)
// console.log(Cat.prototype)
// console.log(Cat.prototype.constructor)

/********************************************/

//2. 构造继承
function Cat(name) {
  Animal.call(this);
  this.name = name || "Tom";
}
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

// 只能继承父类实例的属性和方法，不能继承原型上的属性和方法。
