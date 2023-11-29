const loadImg = urlId => {
    const url = `https://www.image.com/${urlId}`

    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onerror = function() {
            reject(urlId)
        }
        img.onload = function() {
            resolve(urlId)
        }
        img.src = url
    })
}

const urlIds = [1, 2, 3, 4, 5]

urlIds.reduce((prevPromise, urlId) => {
    return prevPromise.then(() => loadImg(urlId))
}, Promise.resolve())

const loadImgOneByOne = index => {
    const length = urlIds.length

    loadImg(urlIds[index]).then(() => {
        if (index === length - 1) {
            return 
        } else {
            loadImgOneByOne(++index)
        }
    })
}

// 分次发送
loadImgOneByOne(0)

// 请求一次发送
const promiseArray = urlIds.map(urlId => loadImg(urlId))

Promise.all(promiseArray)
    .then(() => {
        console.log('finish load all');
    })
    .catch(() => {
        console.log('promise all catch');
    })

// 控制最大并发数为3，最多一起发3个请求，剩下两个一起发出
const loadByLimit = (urlIds, loadImg, limit) => {
    const urlIdsCopy = [...urlIds]

    if (urlIdsCopy.length <= limit) {
        // 如果数组长度小于最大并发数，则直接发出全部请求
        const promiseArray = urlIds.map(urlId => loadImg(urlId))
            return Promise.all(promiseArray)
    }

    // splice 方法会改变 urlIdsCopy 数组
    const promiseArray = urlIdsCopy.splice(0, limit).map(urlId => loadImg(urlId))

    urlIdsCopy.reduce(
        (prevPromise, urlId) => 
        prevPromise
        .then(() => Promise.race(promiseArray))
        .catch(error => { console.log (error) })
        .then(resolvedId => {
            // 将 resolveId 从 promiseArray 中删除
            // 这里用于删除的是伪代码
            let resolvedIdPostion = promiseArray.findIndex(id => resolvedId === id)
            promiseArray.splice(resolvedIdPostion, 1)
            promiseArray.push(loadImg(urlId))
        }),
        Promise.resolve()
    ).then(() => Promise.all(promiseArray))
}