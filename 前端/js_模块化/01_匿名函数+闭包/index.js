let Card = (function () {

    let msg = "Card";
    let createCard = function () {
        console.log("创建了Card")
    }
    // 闭包
    return {
        msg,
        createCard
    }
})();