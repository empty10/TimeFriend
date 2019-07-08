//
let stu={
      name:'xm',
      age:14
}

let xm=Object.create(stu);
console.log(xm.__proto__==stu)

// create 方法创建了一个实例，使用现有的对象来作为该实例的__proto__。
//原型链的方法指出，实例的原型链指向实例所属对象的原型