// MDN 给出最小延迟时间 4ms， 不必钻牛角尖。 1ms 和 0ms 没差别
// setTimeout(() => {
//   console.log("100");
// }, 100);
// setTimeout(() => {
//   console.log("0");
// }, 0);  // 0 100

setTimeout(() => {
  console.log("1");
}, 2); 
setTimeout(() => {
  console.log("0");
}, 0);  // 1, 0