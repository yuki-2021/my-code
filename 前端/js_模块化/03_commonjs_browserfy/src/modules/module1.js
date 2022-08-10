let name = "module1";
function sayName() {
    console.log(this.name)
}

module.exports = {
    name, sayName
}