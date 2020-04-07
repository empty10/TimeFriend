/**
 * @function 任意数求和
 */

 //es6
  
 let sum = (...arg) =>eval((arg.filter(item=>!isNaN(item)).join('+')))

console.log(sum(10,20,30,'aa'))

let param=[1,2,3];
let fn = function () {
    console.log(...arguments)
}
fn(param)

console.log(param)