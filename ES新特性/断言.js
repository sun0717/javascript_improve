// var assert = require('assert')
// const lucas = {
//     age: 23
// }
// assert(22>lucas.age, 'lucas is older than 22!!!')

// 实现 assert
const assert = new Proxy({}, {
    set (target, warning, value) {
        if (!value) {
            console.error(warning);
        }
    }
})