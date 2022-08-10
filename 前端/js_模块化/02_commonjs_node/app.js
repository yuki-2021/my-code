/*
* 使用
* */
let module1 = require("./js/module1.js");
let module2 = require("./js/module2.js");
let uniq = require('uniq')

console.log(module1) // { name: 'module1', sayName: [Function: sayName] }
console.log(module2) // { name: 'mnodule2', sayName: [Function: sayName] }
module1.sayName()
console.log(module2.name)


/*
* uniq
* */
let arr = [1,2,3,4,5,5];
var uniqArr = uniq(arr);
console.log(uniqArr)