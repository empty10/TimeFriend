//原型的原型？

function Person(){

}
let parent=new Person()
// let son=new parent()

//证明 原型的原型的原型 .... 是依次输出的，并且最后2个是 {},null;
//   console.log(son.__proto__)   // 报错parent is not a constructor

//无赖，没有 3层的继承关系
console.log(parent.__proto__)   //Person {}
console.log(parent.__proto__.__proto__)   // {}
console.log(parent.__proto__.__proto__.__proto__)   // null
//object 的原型的__proto__也是null

console.log(Object.prototype.__proto__)   //null

// constructor 存在于什么地方？
console.log(parent.constructor===Person.prototype.constructor)
console.log(Person.prototype.constructor)
console.log(Person.constructor)

// __proto__ 存在于什么地方？
console.log(parent.__proto__===Person.prototype)
console.log(Person.prototype.__proto__)


