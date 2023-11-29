const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('lucas error')
    }, 2000)
})

promise1.then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

// 简单实现：
Promise.prototype.catch = function(catchFunc) {
    // .then()的第二个参数也是进行异常捕获，通过这个特性，我们可以比较简单地实现Promise.prototype.catch
    return this.then(null, catchFunc)
}

