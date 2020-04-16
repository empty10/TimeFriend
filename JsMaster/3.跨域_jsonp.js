//后台服务

let express = require('express'),
  app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server 启动了，正在监听${port}端口`);
});

app.get("/getUserInfo", (req, res) => {
  let fn = req.query.callBack,
      data = {
          name:'张三',
          age:12 
      }
      res.send(`${fn}(${(JSON.stringify(data))})`)
});

//使用jsonp 存在的问题：只支持 get 请求