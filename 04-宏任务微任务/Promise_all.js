// Promise.all(iterable)返回一个Promise实例
// 所有Promise都完成，返回完成。没有任何Promise，返回完成你
// 有一个Promise失败，返回失败，返回原因
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lucas')
    }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lucas')
    }, 2000)
})

Promise.all([promise1, promise2]).then(data => {
    console.log(data);
})
// ['lucas', 'lucas']

// 实现思路
Promise.all = function(promiseArray) {
    if (!Array.isArray(promiseArray)) {
        throw new TypeError('The arguments should be an array')
    }
    return new Promise((resolve, reject) => {
        try {
            let resultArray = [];

            const length = promiseArray.length;

            for (let i = 0; i < length; i++) {
                promiseArray[i].then(data => {
                    resultArray.push(data);

                    if (resultArray.length === length) {
                        resolve(resultArray);
                    }
                }, reject);
            }
        }
        catch(e) {
            reject(e);
        }
    })
}