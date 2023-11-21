function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

// 该函数接收由函数表达式定义的函数，并对作为第二个参数接收的数组的每个元素执行该函数：
const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers));