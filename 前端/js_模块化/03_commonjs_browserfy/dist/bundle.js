(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
* 导入模块
* */
let module1 = require("./modules/module1");
let module2 = require("./modules/module2");

console.log(module1)
console.log(module2)



},{"./modules/module1":2,"./modules/module2":3}],2:[function(require,module,exports){
let name = "module1";
function sayName() {
    console.log(this.name)
}

module.exports = {
    name, sayName
}
},{}],3:[function(require,module,exports){
let name = "module2";

function sayName() {
    console.log(this.name)
}

exports.name = name;
exports.sayName = sayName();
},{}]},{},[1]);
