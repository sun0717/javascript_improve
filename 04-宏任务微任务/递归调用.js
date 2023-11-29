const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lucas')
    }, 2000)
})
// 2s lucas
// 10s lucas next then next then
promise.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${data} next then`)
        }, 4000)
    })
    .then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${data} next then`)
            }, 4000)
        })
    })
})
.then(data => {
    console.log(data);
})