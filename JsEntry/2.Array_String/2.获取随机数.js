let  arr=[1,2,3,4,6,7,0,-1,-34,-22];

//需求1：随机打乱以上数组

let ary=arr.sort(()=>{
      return (Math.random()-0.5)
});
console.log(ary);


//需求2；获取20~88 之间的随机数
let randNum=Math.round(Math.random()*(88-20)+20);
console.log(randNum);

