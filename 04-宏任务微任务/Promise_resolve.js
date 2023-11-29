Promise.resolve('data').then(data => {
    console.log(data);
})
console.log(1);
// 实现
Promise.resolve = function(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}
// reject 实现
Promise.reject = function(value) {
    return new Promise((resolve, reject) => {
        reject(value)
    })
}