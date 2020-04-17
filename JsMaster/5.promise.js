
Promise.all([]).then(()=>{
    console.log(1)
}).catch(()=>{
    console.log(2222)
})

Promise.race([]).then(()=>{
    console.log(1)
}).catch(()=>{
    console.log(2222)
})
