let arr=[1,2,3,4,5],
    array=[11,10,209,199,22,333];

//push/pop，unshift/shift,reverse/sort，splice,slice,join/toString,,

//其中push/pop，unshift/shift,reverse/sort，splice这个7个方法改变原数组

//1,splice 删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
// let sp=arr.splice(2,1,999)
// console.log(arr,sp)   //[ 1, 2, 999, 4, 5 ] [ 3 ]


// 2,slice(begin,end 不包含)，返回一个新的数组（前拷贝），不改变原数组
// console.log(arr)
// let res=arr.slice(-1,0)
// console.log(res)


//3,unshift 将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
// console.log(arr.unshift(00,11))   //7

//4,shift 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
// console.log(arr.shift())   //1


//3,reverse 把数据倒序排列，返回倒序数组，原来数组改变

//sort 给数组排序，返回排序后的数组，原数组改变（在不传递参数的情况下，只能排10以内的数）

// console.log(array.sort((a,b)=>a-b))


//4,join 将一个数组的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
// console.log(arr.join())  //1,2,3,4,5
// console.log(arr.join(''))  //12345
// console.log(arr.join('-'))  //1-2-3-4-5




//5,sort 排序，返回原数组，改变原数组 ;reverse 倒序，改变原数组
// console.log(array.sort((a,b)=>a-b)) //[ 10, 11, 22, 199, 209, 333 ]

// console.log(array.reverse())  //[ 333, 22, 199, 209, 10, 11 ]
 


// ...展开运算符  实现浅拷贝
let a=[1,2,3,'aaa',5],
    b=null;
    b=[...a];
    // console.log(b===a) //false


let aa={cc:10},
    bb={...aa};
// console.log(aa,bb,aa==bb,aa===bb)  //false,false


