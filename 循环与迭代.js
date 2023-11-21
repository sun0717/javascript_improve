// for ... in 循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript会为每一个不同的属性执行指定的语句。
// for (variable in object) {
//  statements  
// }
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i);
}
// for in 不如传统的 for循环 迭代一个数组，因为返回的不仅除了数组索引，也有自定义的属性名字。
// for in 遍历的结果是数组的元素下标，for of 遍历的结果是元素的值
let cat = {
    'name': 'a',
    'age': 12
}

let dog = ['a', 'b', 'c']

for (let i in cat) {
    console.log(i)
}

for (let i of dog) {
    console.log(i)
}