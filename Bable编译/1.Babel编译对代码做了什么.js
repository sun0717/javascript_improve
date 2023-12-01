/**
 * 编译 ES Next 代码，进行降级处理，进而规避兼容性问题。
 * AST(抽象语法树)对源码进行分析并转为目标代码。
 */
let array = []
for (let i = 0; i < 10; i++) {
    array[i] = function() {
        console.log(i);
    }
}
array[6]()
// 6

