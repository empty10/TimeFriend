var array = [1, 2, 1, 1, '1'];

// let array =[{name:11},{name:11}]
// let array= ['22','22']

// 1.indexOf 返回在数组中可以找到一个给定元素的第一个索引。
// function unique(arr){
//     return arr.filter((item,index)=>{
//         return arr.indexOf(item) === index
//     })
// }

//2.利用 includes 
// function unique(arr){
//     let newAry=[];
//     arr.forEach(item => {
//         if(!newAry.includes(item)){
//             newAry.push(item)
//         }
//     });
//     return newAry
// }

//3.set 
// function unique(arr){
//     const set = new Set(arr);
//     return Array.from(set)
// }

console.log([...new Set(array)])



// console.log(unique(array))


//4.
// function unique(array) {
//     var obj = {};
//     return array.filter(function(item, index, array){
//         return obj.hasOwnProperty(item) ? false : (obj[item] = true)
//     })
// }
