//原型prototype、原型链__proto__
function Student(){
      name:'jmds',
      this.age=12
}
Student.prototype.name='aaa';
let stu = new Student()
console.log('实例stu有没有_proto_',stu.__proto__)

//1、每一个函数都有一个prototype，而对象不一定
// console.log(Student.prototype)   //有
console.log(stu.prototype,typeof stu)     //undefined  实例没有原型

//2.__proto__  实例的原型指向其对象的原型
// console.log(stu.__proto__===Student.prototype)
// console.log(Student.__proto__,Function.__proto__)
// console.log(Student.constructor)

//3. constructor 构造函数，在原型上的构造函数指向了其关联的构造函数
// console.log(Student.prototype.constructor===Student)
// console.log(stu.__proto__.constructor===Student)
// //学习一个ES5的方法,可以获得对象的原型
// console.log( Object.getPrototypeOf(stu).constructor===Student)


//总结、以上讲了 构造函数、实例、实例原型、
//4.实例 与 原型 之间的关系：在读取实例属性的时候，如果找不到就会去查找实例原型，
//如果还没有找到，就会再向上一级查找，直到查找到最顶级 Object
// Student.prototype.name='赵四'
// console.log(Student.prototype)
// stu.name='张三'
// console.log(stu.name)
// delete stu.name         
// console.log(stu.name)

//5. 原型的原型？
// console.log(typeof stu.__proto__)   // object
// console.log(stu.__proto__)                     // Student {}
// console.log(stu.__proto__.__proto__)              // {}
// console.log(stu.__proto__.__proto__.__proto__)    //null
// console.log(Object.prototype.__proto__)           //null

//总结：实例的原型链可以打印出来，是从其对应对象的原型一直查找到object 的一个链条；图示
