/**
 * 从任意位置插入元素
 */
let arr = [1,2,3,4];
arr.splice(1,0,99);
// console.log(arr);  //1,99,2,3,4

/**
 * 数组合并，返回新数组
 */
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
// console.log(arr3);

/**
 * 数组迭代
 */
function isEven (val) {
  return val % 2 == 0;
}
var arr4 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr4.every(isEven))
// console.log(arr4.some(isEven))
// arr4.forEach((item) => {
//   console.log(item % 2 == 0)
// })
// console.log(arr4.map(isEven))
// console.log(arr4.filter(isEven))

/**
 * 利用reduce求和
 */
var arr5 = [1,2,3,4,5,6];
console.log(arr5.reduce((prev, cur, index, arr) => {
  return prev + cur;
}))

