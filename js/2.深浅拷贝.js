/*  拷贝分为：深拷贝、浅拷贝
*  浅拷贝：
*  深拷贝：
* */

let person={
      name:'jim',
      score:{
          english:80,
          math:100
      },
      animal:[{name:'dog',num:2},{name:'cat',num:1}]
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
      }else {
           return obj;
      }

      return result;
};

console.log(deepClone(person));

console.log(JSON.parse(JSON.stringify(person)));