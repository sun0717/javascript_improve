/**
 * 
 * 宏任务：
 *      - setTimeout
 *      - setInterval
 *      - I/O
 *      - 事件
 *      - postMessage
 *      - setImmediate(Node.js中的特性，浏览器端已废除)
 *      - requestAnimatonFrame
 *      - UI 渲染
 * 微任务：
 *      - Promise.then
 *      - MutationObserver
 *      - process.nextTick(Node.js)
 */
console.log('start here')

const foo = () => (new Promise((resolve, reject) => {
    console.log('first promise constructor');

    let promise1 = new Promise((resolve, reject) => {
        console.log('second promise constructor');

        setTimeout(() => {
            console.log('setTimeout here');
            resolve()
        }, 0)

        resolve('promise1')
    })

    resolve('promise0')

    promise1.then(arg => {
        console.log(arg);
    })
}))

foo().then(arg => {
    console.log(arg);
})

console.log('end here');