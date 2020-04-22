/*  拷贝分为：深拷贝、浅拷贝
 *  浅拷贝：
 *  深拷贝：
 * */
let person = {
  name: "jack",
  age: null,
  height: undefined,
  color: {a:1,b:{c:22}},
  address: Symbol("new york"),
  speak: function () {
    console.log("english");
  },
  time: new Date(),
};

//1. JSON.parse(JSON.stringify(person))   丢失 undefined,Symbol,function 等类型

// console.log(JSON.parse(JSON.stringify(person))) //{ name: 'jack', age: null, color: {} }

//2. 实现一个 递归拷贝
let deepClone = function deepClone(obj) {
  if (obj == null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  //如果是其他对象，则拷贝每一项；如果不是对象，就返回。
  if (typeof obj !== "object") return obj;
  let newObj= new obj.constructor;
  for(let key in obj){
        if(obj.hasOwnProperty(key)){
              newObj[key]=deepClone(obj[key])
        }
  }    
  return newObj
};

let p = deepClone(person);
p.color.b.c=99;
console.log(p);
console.log(person);
