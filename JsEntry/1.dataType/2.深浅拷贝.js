/*  拷贝分为：深拷贝、浅拷贝
*  浅拷贝：
*  深拷贝：
* */
let person={
      name:undefined,
      score:{
          english:80,
          math:100
      },
      animal:[{name:'dog',num:2},{name:'cat',num:1}]
};

Object.defineProperty(person,'age',{
      enumerable: true,
      value: 8
});


let show = function show(){
    let a=1;
    return function () {
          let b=2;
      //     console.log(a+b);
    }
};


let deepClone= function deepClone(obj) {
      let result=null;

      //如果当前元素是数组
      if(Object.prototype.toString.call(obj)=='[object Array]'){
            result=[];
            for (let i=0;i<obj.length;i++){
                  result[i]=deepClone(obj[i]);
            }
         //如果当前元素是对象
      }else if(Object.prototype.toString.call(obj)=='[object object]'){
            result = {};
            for(var item in obj){
                 result[item]=deepClone(obj[item]);
            }
         //值类型直接返回
      }else if(Object.prototype.toString.call(obj)=='[Object function]'){
            return new Function("return " + obj.toString())();
      }
      else {
           return obj;
      }

      return result;
};

let p= deepClone(show)
console.log(p,'show');

// console.log(JSON.parse(JSON.stringify(person)));