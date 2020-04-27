// 1、[1, 2, [3, [4, 5]]];　 [1, 2, 3, 4, 5]
// const e = require("express")
// let arr=[1, 2, [3, [4, 5]]];
// let array =  arr.toString().split(',')
// console.log(array)
// 2、写一个sum方法，可以实现以下两种调用方式sum (1,2)和sum(1)(2);

function sum(){
    let num=arguments[0];
    if(arguments.length==1){
        return function(){
                return arguments[0]+num;
        }
    }else{
        return eval([...arguments].join('+'))
    }
}

console.log(sum(1,2))
console.log(sum(1)(2))