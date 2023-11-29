function Promise(executor) {
    const self = this
    this.status = 'pending'
    this.value = null
    this.reason = null

    function resolve(value) {
        self.value = value
    }

    function reject(reason) {
        self.reason = reason
    }

    executor(resolve, reject)
}

Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {
    onfulfilled(this.value)

    onrejected(this.reason)
}
// Promise 实例状态只能从 pending 变为 fulfilled，或者从 pending 变为 rejected。
// 状态一旦变更完毕，就不可再次变化。
// 1. 不满足
let promise = new Promise((resolve, reject) => {
    resolve('data')
    reject('error')
})

promise.then(data => {
    console.log(data);
}, error => {
    console.log(error);
})

// 对上述代码进行更改
function Promise(executor) {
    // const self = this
    this.status = 'pending'
    this.value = null
    this.reason = null

    const resolve = value => {
        if (this.status === 'pending') {
            this.value = value
            this.status = 'fulfilled'
        }
    }

    const reject = reason => {
        if (this.status === 'pending') {
            this.value = reason
            this.status = 'fulfilled'
        }
    }
    executor(resolve, reject)
}

Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
    onrejected = typeof onrejected === 'function' ? onrejected : error => { throw error }
    
    if (this.status === 'fulfilled') {
        onfulfilled(this.value)
    }

    if (this.status === 'rejected') {
        onrejected(this.reason)
    }
    
}