let express = require('express'),
    app = express();

const port =3000;

app.listen(port,()=>{
    console.log(`成功启动服务，监听端口 ${port}`)
})

// import {num } from  './1.main'

// console.log(num)
// // console.log(add(1,2))