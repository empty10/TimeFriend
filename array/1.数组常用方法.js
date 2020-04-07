let arr=[1,2,3,4,5],
    array=[11,209,199,282,333];

//push，pop，unshift,shift,splice,slice,join/toString,reverse/sort,

//splice 删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。


// slice(begin,end 不包含)，返回一个新的数组（前拷贝），不改变原数组
// console.log(arr)
// let res=arr.slice(-1,0)
// console.log(res)


//reverse 把数据倒序排列，返回倒序数组，原来数组改变

//sort 给数组排序，返回排序后的数组，原数组改变（在不传递参数的情况下，只能排10以内的数）

// console.log(array.sort((a,b)=>a-b))

//随机排序


// ...展开运算符  实现浅拷贝
let a=[1,2,3,'aaa',5],
    b=null;
    b=[...a];
    console.log(b===a) //false


let aa={cc:10},
    bb={...a};
console.log(aa,bb)


