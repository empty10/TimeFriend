//trim() ,charAt() , concat(),split(),slice(), substring(),substr()

let  str= 'hello'
//1、trim 去除首位的空白
// let  str1= '    hello !  '
// console.log(str1.trim())   //hello !


//2,concat() 方法将一个或多个字符串与原字符串连接合并

// console.log(str.concat(' world!'))
// console.log(str.concat(',world!'))

//3,split() 把字符串按照指定的分割符号拆分为数组
console.log(str.split(''))

// 4,slice(n,m)/substring(n,m），返回从索引 n 到 m（不包含）的字符串
// slice 支持负数索引，substring不支持
// console.log(str.slice(1,3))
// console.log(str.substring(1,3))

//5, substr(n,m)  从索引n开始截取m个元素，返回字符串


//6,indexOf() 方回调用它的String中第一次出现的指定值的索引。如果未找到该值，则返回 -1。
console.log(str.indexOf('l'))


//7,lastIndexOf() 方回调用它的String中第一次出现的指定值的索引。如果未找到该值，则返回 -1。
console.log(str.lastIndexOf('l'))