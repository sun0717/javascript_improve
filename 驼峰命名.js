const str = 'back-image';
let arr = str.split('-');
let result = arr[0].concat(arr[1][0].toUpperCase()).concat(arr[1].slice(1));
console.log(result);