/**
 *  柯里化函数: 把接受多个参数的函数，改变成接受一个参数的函数，并且返回接受余下参数的结果
 *  实现 add(1,2,3)  === add(1)(2)(3)
 */

const add =  (a, b, c, d, e) =>{
  return a + b + c + d + e;
};

const currying = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args);
    console.log(len,arr,args)
    if (arr.length < len) {
      return  currying(fn, arr);
    }
    return fn(...arr);
  };
};

console.log(currying(add, [1, 2])(3, 4)(5));
