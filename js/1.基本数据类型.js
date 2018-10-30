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

//1、 typeof 可以检测 number/String/ boolean；但是无法检测出null,object,Array

console.log(typeof 10);    // 'number'
console.log(typeof '19');   //'String'
console.log(typeof false);       //'boolean'
console.log(typeof null);   // 'object'
console.log(typeof {name: 'jack'});  //'object'
console.log(typeof [10, 20]);    //'object'

// 2、检测null,两种方法
let obj=null;
// !obj 是真的，由三种情况，null,undefined,0
if(!obj && typeof obj !=='undefined'&& obj !==0){
      console.log('obj是null');
}
if(obj===null){
      console.log('=====obj是null=====');
}

//3、检测数组
let arr=[10,20];

if(arr instanceof Array){
      console.log('arr 是Array的子类');
}

if(arr.constructor===Array){
      console.log('arr 的类型是数组');
}

if(Object.prototype.toString.call(arr)==='[Object Array]'){
      console.log('arr是数组类型');
}

