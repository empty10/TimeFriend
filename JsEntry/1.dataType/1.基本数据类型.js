/*
*  基本数据类型：数值类型、引用类型
*
*  数值类型：number/String/boolean/null/undefined
*  引用类型：object( Array  function)
*  ES6新增Symbol：独一无二的值，不能new ;一个symbol值能作为对象的属性标识符，这是该数据类型仅有的目的。
*
* */

//检查数据类型的四种方式
//  typeof  instanceOf  constructor Object.prototype.toString.call()

//1、 typeof 可以检测 number/String/ boolean/undefined/function；但是无法检测出null,object,Array

console.log(typeof 10);    // 'number'
console.log(typeof '19');   //'String'
console.log(typeof false);       //'boolean'
console.log(typeof null);   // 'object'
console.log(typeof undefined);   // 'undefined'
console.log(typeof {name: 'jack'});  //'object'
console.log(typeof [10, 20]);    //'object'
console.log(typeof function(){});  //'function'
console.log(typeof Symbol(10));   //symbol
// // 2、检测null,undefined
// let obj=null;
// // null,undefinde 都严格等于自己，非严格相等
// if(undefined === undefined){
//       console.log('=====undefined=====111');
// }
// if(obj===null){
//       console.log('=====obj是null=====222');
// }
// if(null==undefined){
//       console.log('========null=undefined===========')
// }

// //3、检测数组  有4种方法
// let arr=[10,20];

// if(arr instanceof Array){
//       console.log('arr是数组类型11111',arr instanceof Array);
// }

// if(arr.constructor===Array){
//       console.log('arr是数组类型22222',arr.constructor);
// }

// if(Array.isArray(arr)){
//       console.log('arr是数组类型33333',Array.isArray(arr));
// }


// if(Object.prototype.toString.call(arr)==="[object Array]"){
//       console.log('arr是数组类型444444',Object.prototype.toString.call(arr));
// }

