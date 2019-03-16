let arr=[1,2];

// arr.push(3);

// arr.pop();

// arr.shift();

// arr.unshift(0);


//  原数组改变
// 删除  从索引 n开始删除m 个类容
let ary=arr.splice(0,1);
console.log(ary);
//增加  从索引1 开始删除 0 项，把X 或者更多的内容放在 索引1后面
arr.splice(1,0,11,12,13,14);
console.log(arr);

//修改   从索引1开始，修改2个元素，替换为 “mobilePhone”
arr.splice(1,2,'mobilePhone');
console.log(arr);

let array=[1,23,44,45,41,7];

console.log(array.sort());

array.sort(function (a,b) {
      return a-b;
});
console.log(array);