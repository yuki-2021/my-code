'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var name = 'module1';
function sayName() {
    console.log(this.name);
}

exports.default = sayName;