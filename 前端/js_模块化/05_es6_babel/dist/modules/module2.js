"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sayName = sayName;
var name = exports.name = "module2";
function sayName() {
    console.log(this.name);
}