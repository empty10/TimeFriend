let a = {
  age: 1,
  jobs: {
    first: "FE",
  },
};

let b = { ...a };

// a.jobs.first = "BE";
// console.log(b.jobs.first); //BE ，操作引用，一个改变，另一个也会跟着改变

//深度拷贝

//1,使用 JSON.parse(JSON.stringify(a))
let b2 =JSON.parse(JSON.stringify(a))

a.jobs.first = "BE";

// console.log(a.jobs.first,b2.jobs.first)

//2.验证该方法对数据是否有效
let arr= [1,2,3];
let array= JSON.parse(JSON.stringify(arr));

arr[0]=10;
// console.log(arr,array)  // [ 10, 2, 3 ] [ 1, 2, 3 ] 

//3.验证该方法对函数是否有效

let z ={
    a:undefined,
    b:Symbol('male'),
    c: function (){ console.log('hhhh')},
    d:'zzz'
}

let y = z.toString();


console.log(z,y)