class Person{
    constructor(name,age){
        this.name = name;
        this.age = age ;
    }

    sayName(){
        console.log(this.name)
    }
}

class Stu  extends Person{
    // constructor(...args){        //此处不写 constructor也可以，函数会默认添加
    //     super(...args)
    // }
}
let stu = new Stu('张三',12)
console.log(stu.name,stu.age)
stu.sayName()


