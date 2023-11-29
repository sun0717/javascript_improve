class Person {
    constructor(name) {
        this.name = name;
    }
}

// let proxyPersonClass = new Proxy(Person, {
//     apply (target, context, args) {
//         throw new Error(`hello: Function ${target.name}  cannot be invoked without 'new'`)
//     }
// })

// 对 Person 构造函数进行了代理，这样就可以防止它作为非构造函数被调用
// proxyPersonClass('lucas')  // Uncaught Error: hello
// console.log(person.name);  
// 将 Person 静默处理成被非构造函数调用的函数，把对Person函数的调用强制转换为用new调用
let proxyPersonClass = new Proxy(Person, {
    apply (target, context, args) {
        return new (target.bind(context, ...args)) ()
    }
})
proxyPersonClass('lucas') 