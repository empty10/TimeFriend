//every,filter,find,forEach，includes,keys,map,reduce,some

let array = [1,2,3,4,5];

//1，every 测试一个数组内的所有元素是否都能通过某个指定函数的测试。返回一个布尔值。
// console.log(array.every(item=>item>3))  //false

//2，filter 返回一个通过测试函数的新数组。
// console.log(array.filter(item=>item%2===0))

//3，keys 返回一个包含数组中每个索引键的Array Iterator对象，会包含 不存在值的key 
let arr=[1,,3],
    it=arr.keys();
// console.log(arr.keys())   // Object [Array Iterator] {}
for(const key of it){
    // console.log(key)  //0,1,2
}

//4，forEach，遍历；
//5，includes,测试是否包含通过函数测试的元素，返回布尔值
//6,map 创建一个新的数组，其结果是原数组中的每一个元素都调用一次提供的函数
// console.log(array.map(item=>item*2))


//7,reduce 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

// console.log(array.reduce((a,b)=>a+b));   //15
// console.log(array.reduce((a,b)=>a+b,10));  //25 ,10 是提供的初始值

//8，some 测试数组中是否存在满足测试函数的元素，返回布尔值
console.log(array.some(item=>item>0))  //true

