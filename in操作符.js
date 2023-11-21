var trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
console.log(0 in trees);    // true
console.log(3 in trees);    // true
console.log(5 in trees);    // false
console.log('bay' in trees);// return false
console.log('length' in trees);// true length is an Array property.
