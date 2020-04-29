function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(this.name,...arguments)
}

let p1 = new Person('张三');
 
// p1.sayName(10,11)  //张三

// ok,现在问题来了 ,有一个 animal也想使用sayName()的方法，怎么办呢？
let animal = {
    name :'cat'
}

/***********可以这样******************/
p1.sayName.call(animal,2,3)
p1.sayName.apply(animal,[4,5])

let res = p1.sayName.bind(animal,[6,7]).call(p1)
console.log(res)
// bind  将sayName函数返回
// ƒ (){
//     console.log(this.name)
// }