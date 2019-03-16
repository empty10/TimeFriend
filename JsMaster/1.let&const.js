// 1、var  没有自己的作用域
// if(1===1){
//       // console.log('hello,2019!')
//       var a=10
// }
// console.log(a);


//2 证明：switch  case 里面的case 也是独立的块级作用域
// let a=1;
// switch(a){
//       case 0:let b='2018'
//       case 2:let b='2019'
//       case 1:console.log(b)
// }

//3、使用var 定时器,
// for(const i=0;i<5;i++){
//       setTimeout(() => {
//            console.log(i) 
//       }, 1000);
// }

/**
 * 上面的代码将输出5个5，因为在输出i的时候，i 拿到的值是全局作用域下的值；
 *  在var 时代，js只有全局作用域、函数级作用域
 */
//要使用var 进行for循环，输入0，1，2，3，4，可以利用函数级作用域
// for(var i=0;i<5;i++){
//       (function(i){
//             setTimeout(() => {
//                   console.log(i) 
//             }, 1000);
//       })(i)
// }

//而如果使用 let 定义i，则可以直接实现输入0，1，2，3，4的效果；将代码放入babel转译后，
// 发现本质上，let 还是利用了函数级作用域


// const 本质上是，保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动
// const pi=3.14;
// pi=5
// console.log(pi)


// const student={name:'xiaoming',age:9};
// student.age=10
// console.log(student)
