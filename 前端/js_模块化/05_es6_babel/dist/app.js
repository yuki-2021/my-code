'use strict';

var _module = require('./modules/module1.js');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./modules/module2.js');

var module2 = _interopRequireWildcard(_module3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module2.default); /*
                               * 导入模块
                               * */

console.log(module2);
console.log(_module3.name);
console.log(_module3.sayName);