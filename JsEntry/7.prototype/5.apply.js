// apply 和call的作用一样，唯一的差别是call接收的参数是列表，而apply接收的是一个数组

Function.prototype.myApply = function(content=window){
    content.fn = this;
    let result;
    //判断是否有第二个参数
    if(arguments[1]){
        result = content.fn(...arguments[1])
    }else{
        result = content.fn();
    }
    delete context;
    return result;
}

//---------
function f1(p1,p2){
    console.log(this.name)
    console.log(p1,p2)
}
let f2 = { name:'哈哈哈'}

console.log(f1.myApply(f2,[12,10]))