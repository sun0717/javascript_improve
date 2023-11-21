let str1 = 'abcde';
let str2 = 'abcba';
let str3 = 'a';
let str4 = 'baccab';
const isReverse = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isReverse(str1));
console.log(isReverse(str2));
console.log(isReverse(str3));
console.log(isReverse(str4));