// let f = (...args)=>{
//     return  args
// }

// console.log(f(1,2))


setTimeout(()=>{
    console.log(1);
    process.nextTick(()=>{
        console.log(2)
    });
})

setTimeout(()=>{
    console.log(3)
    process.nextTick(()=>{
        console.log(4)
    });
})