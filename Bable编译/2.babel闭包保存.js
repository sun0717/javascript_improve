// "use strict";
// var array = []

// var _loop = function _loop(i) {
//     array[i] = function() {
//         console.log(i);
//     };
// };

// for (var i = 0; i < 10; i++) {
//     _loop(i);
// }
// array[6]();
// 使用 const 声明的变量一旦声明，其变量(内存地址)是不可改变的。
const foo = 0
foo = 1

// TypeError: Assignment to constant variable.
