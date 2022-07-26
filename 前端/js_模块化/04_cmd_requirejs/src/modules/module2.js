define("module2", ["module1"], function (module1) {

    name = 'module2';
    function sayName() {
        module1.sayName.call(this);
    }
    function sayCount() {
        console.log(module1.count)
    }

    return  {
        name,
        sayName,
        sayCount
    }
})