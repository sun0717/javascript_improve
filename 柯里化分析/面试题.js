const add = arg1 => {
    // let args = [arg1];
    const fn = arg2 => {
        args.push(arg2);
        return fn;
    }
    fn.toString = function() {
        return args.reduce((prev, item) => prev + item, 0);
    }
    return fn;
}

console.log(add(1)(2)(3) == 6);