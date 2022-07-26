let name = 'module1'

function sayName() {
    console.log(this.name)
}


/*
* 定义module1模块
* */
module.exports = {
    name, sayName
}