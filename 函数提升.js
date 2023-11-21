// 
/* const doThis = () => {
    console.log('this');
}
const doThat = () => {
    console.log('that');
}
var input;
if (input === undefined) {
    doThis();
} else {
    doThat();
} */
var a;
console.log(a + 2); // NaN
// null 在数值类型环境中会被当作0来对待，而布尔类型环境中会被当作false
var n = null;
console.log(n * 32); // 0

// 函数提升
// 函数声明会被提升到顶部，而函数表达式不会被提升
foo(); // bar
// 函数声明
function foo() {
    console.log("bar"); 
}
// 函数表达式
baz(); // 类型错误：baz不是一个函数
const baz = () => {
    console.log(bar2);
}
