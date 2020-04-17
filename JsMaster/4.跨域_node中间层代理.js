let express = require('express'),
    request = require('request'),
    app = express();
const port = 8000;

app.listen(port,()=>{
    console.log(`Server is on ${port}`)
})

app.get('/info',(req,res)=>{
    request('http://www.chinanews.com/m/part/zw/70/rmtp/1.js',
    (err,response,body)=>{
        if(err){
            res.send({
                code:-1,
                data:'error'
            })
            return ;
        }

        res.send({
            code:0,
            data:body
        })
    })
})