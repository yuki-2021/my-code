/*
* 定义Module1
* */
define('module1', [],  function () {

    name = "module1";
    count = 1;
    function sayName() {
        console.log(this.name)
    }
    //  闭包
    return {
        name,
        count,
        sayName
    }
})