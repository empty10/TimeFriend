let arr=[
      {name:'蛮吉',age:10,animal:'qihengsan'},
      {name:'蛮小满',age:38,animal:'dahai' },
      {name:'海问香',age:27,animal:'none'}
];

arr.sort(function (a,b) {
      return a.name.localeCompare(b.name);
});

arr.sort(function (a,b) {
      return a.animal.localeCompare(b.animal)
});

console.log(arr);