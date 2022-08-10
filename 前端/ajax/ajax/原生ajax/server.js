// 引入Expresss, express基于Node， Node采用的是CommonJs的模块化语法
const express = require("express")

// 创建App
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 创建 路由
app.all("/server", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*")
    resp.setHeader("Access-Control-Allow-Headers", "*")
   resp.send("Hello Ajax");
})

// 请求参数
app.all("/param-get", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    let username = req.query["username"];
    let password = req.query["password"];
    res.send(`QueryString - ${username} - ${password}`)
})


// 请求参数
app.all("/param-post", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.send(`body - ${req.body.username} - ${req.body.password} `)
})

// 请求参数
app.all("/param-json", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.send(`body - ${req.body.username} - ${req.body.password} `)
})

// 响应头
app.all("/resp-head", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Access-Control-Expose-Headers", "*")
    res.setHeader("res", "okok");
    res.setHeader("res1", "okok");
    res.send("res - okok");
})

// 响应数据的格式 - JSON数据
var data = {id: 1, username: '张三', age: 12, gender: '女'}
app.all("/json", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*")
    resp.setHeader("Access-Control-Allow-Headers", "*")
    resp.send(data)
})

// 缓存
app.get("/cache", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*")
    resp.setHeader("Access-Control-Allow-Headers", "*")
    // resp.setHeader("Cache-Control", 'public, max-age=31536000')
    // resp.setHeader("Cache-Control", "no-store")
    console.log("aaa")

    resp.send("刘备阿达")
})

// timeout
app.get("/time5", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*")
    resp.setHeader("Access-Control-Allow-Headers", "*")
    setTimeout(() => {
        resp.send("5s end")
    }, 5000)
})

// 监听端口
app.listen(8000, (hostname) => {
    console.log(`[[ 服务器已经启动，host:${hostname}, port: 8000 ]]`)
})