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

// 3.组合继承（构造继承+原型链继承）
function Cat(name) {
  Animal.call(this,name);
  this.color = "blue";
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

let cat = new Cat('小猫');
console.log(cat.name,cat.color)
console.log(cat.sleep())
console.log(cat)
console.log(cat.__proto__)


/**
 *   组合继承  有一个问题：name属性 和 sleep()方法 在初始化的时候被调用了2次。name属性 和 sleep()
 * 在实例上有，在其原型链上也有。
 *  这是因为来源，一个是继承了构造函数的，另一个来自于new Animal()实例上。
 * 
*/