// 在函数作用域中，让外部访问不到
// (function() {

// })()

// 解构赋值 - 交换元素
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b)
// 解构赋值 - 交换数组中元素
// 结构赋值对冒号很在意，会报错
// let arr = [1, 3, 2]
// [arr[1], arr[2]] = [arr[2], arr[1]]
// console.log(arr)
let arr = [1, 3, 2];
[arr[1], arr[2]] = [arr[2], arr[1]];
console.log(arr);
