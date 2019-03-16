// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third)

// let [rest,...a]=[1,2,3,4];
// console.log(a)
// console.log(rest)



// 数组 默认值规则
// let [x = 1,y=2,z=3] = [undefined,0,null];
// console.log(x,y,z)

//对象解构  
// let {name,age,sex}={age:10,name:'xm'}
// console.log(name,age,sex)

//字符串的解构
// let [a,b,c,d,e]='2019'
// console.log(a,b,c,d,e)
// let {length : len}='2019'
// console.log(len)

// 函数的解构赋值
// let arr=[[10],[1, 2], [3, 4]].map(([a, b]) => a + b);
// console.log(arr)

// function add({x = 0, y = 0} = {}) {
//       return x+y;
//     }
    
// let a=add({x: 3, y: 8}); // [3, 8]=11
// let b=add({x: 3}); // [3, 0]= 3
// let c=add({}); // [0, 0]=0
// let d=add(); // [0, 0]=0


//注意这里不一样
function add({x,y}={x:0, y:0}) {
      return x+y;
 }
    
let a=add({x: 3, y: 8}); // [3, 8]=11
let b=add({x: 3}); // [3, undefined]= NAN
let c=add({}); // [undefined, undefined]=NAN
let d=add(); // 0

console.log(a,b,c,d)

// function move({x, y} = { x: 0, y: 0 }) {
//       return [x, y];
//     }
    
// console.log(move({x: 3, y: 8})); // [3, 8]
// console.log(move({x: 3})); // [3, undefined]
// console.log(move({})); // [undefined, undefined]
// console.log(move()); // [0, 0]





