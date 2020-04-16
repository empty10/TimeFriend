// 4. 通过寄生方式，
//砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性

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

  // 4.寄生组合继承
  function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
  }
  (function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
  })();
  // Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // true
  console.log(cat instanceof Cat); //true


  console.log(Animal.prototype.__proto__)
  console.log(Animal.prototype.constructor)
  console.log(Animal.prototype.constructor.prototype === Animal.prototype) //true