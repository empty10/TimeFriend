/**
 * 实现一个方法，最多调用10次，返回一个promise
 */ 

 function fn(fn){
     let times=10;
     return function (){
         times++;
         if(times<10){
            fn();
            return new Promise(()=>{
                resolve(11)
            })
         }
     }
 }

 function add(){
     console.log('===1+1===')
 }

 let p = fn(add)

p()