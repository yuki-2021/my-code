let name = "module2";

function sayName() {
    console.log(this.name)
}

exports.name = name;
exports.sayName = sayName();