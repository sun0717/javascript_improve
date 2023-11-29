class Person {
    constructor(name) {
        this.name = name
    }
    // autobind 完成自动绑定
    @autobind
    getPersonName() {
        return this.name
    }
}

// autobind 这个装饰器函数接收以下3个参数。
// - target：目标对象，这里作用于Person中的函数、属性
// - key：属性名称
// - descriptor：属性原本的描述符
function autobind(target, key, { value: fn, configurable, enumerable }) {
    return {
        configurable,
        enumerable,
        get() {
            const boundFn = fn.bind(this);
            defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: false,
                value: boundFn
            });
            return boundFn;
        },
        set: createDefaultSetter(key)
    };
}
const person = new Person('lucas')

const fn = person.getPersonName;
fn(); // TypeError: Cannot read properties of undefined (reading 'name')