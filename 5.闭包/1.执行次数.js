//利用闭包写一个函数，调用第一次、第二次的时候都不输入，第三次的时候才会输出

function threeToOne (){
      let times=0;
      return function (){
            times++;
            if(times>2){
                  console.log('Hello,2019!')
            }
      }
}

let ouput=threeToOne();
ouput();
ouput();
ouput();