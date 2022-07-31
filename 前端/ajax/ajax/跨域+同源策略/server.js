const express = require("express");

const app = express();

// jsonp
var person = {username: "admin", password: "123456"}
app.all("/jsonp",(req, res) => {
     let {callback}= req.query
    console.log(callback)
    res.send(`${callback}(${JSON.stringify(person)})`)
})

app.listen(8000,() => {
    console.log("服务器启动成功，正在监听端口: [[8000]]")
})