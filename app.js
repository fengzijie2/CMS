const express = require("express")
const app = express()
const path = require("path")
// require("./data/index")  // 预设的数据

app
    .use(express.json())
    // .use("/file", express.static("./public"))
    .use(express.static("./public"))
    .use("/api", require("./router"))

app.get("*", (req, res)=>{ // 当没有匹配到正确的request路由处理时,进到这里
    // 返回前端的index.html
    res.sendFile(path.join(__dirname, "./public/index.html"))
})


app.listen(8888, () => console.log("开始监听8888端口"))


// pm2 ： 进程管理工具。 管理多个项目的启动和停止
// nginx  
