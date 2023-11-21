const toString = Object.prototype.toString

export function type(x, strict = false) {
    // 强转为 bool 类型
    strict = !!strict

    // fix typeof null = object
    if (x === null) {
        return 'null'
    }

    // 获取类型
    const t = typeof x

    // number string boolean undefined symbol
    // 基础类型
    if (t !== 'object') {
        return t
    }

    let cls
    let clsLow
    // 
    try {
        // [object null] 切割字符串
        cls = toString.call(x).slice(8, -1)
        // 转小写
        clsLow = cls.toLowerCase()
    } catch(e) {
        // IE 浏览器下的 activex 对象
        return 'object'
    }
    // 如果是基本数据类型
    if (clsLow !== 'object') {
        // 区分 String() 和 new String()
        
        if (strict && (clsLow === 'number' || clsLow === 'boolean' || clsLow === 'string')) {
            return cls
        }
        return clsLow
    }

    if (x.constructor === Object) {
        return clsLow
    }

    // Object.create(null)
    try {
        // __proto__部分的早期 Firefox 浏览器
        if (Object.getPrototypeOf(x) === null || x.__proto === null) {
            return 'object'
        }
    } catch(e) {
        // IE 浏览器下无 Object.getPrototypeOf 会报错
    }

    // function A() {}; new A
    try {
        const cname = x.constructor.name

        if (typeof cname === 'string') {
            return cname
        }
    } catch(e) {

    }

    // function A() {}; A.prototype.constructor = null; new A
    return 'unknown'
}
