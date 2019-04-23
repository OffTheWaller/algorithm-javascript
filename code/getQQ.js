/**
 * 一个数组号码: 6,3,1,7,5,8,9,2,4
 * 将第一个删除，第二个移到尾部，再删除，再移到尾部，直到最后一个删除
 * 把删除的按顺序组成一个新的字符： 6 1 5 9 4 7 2 8 3
 */
function getQQ (arr) {
  //先在前面补个0，方便后面的索引值
  arr.unshift(0);
  let head = 1;
  let tail = arr.length;
  let result = [];
  while (head < tail) {
    result.push(arr[head]);
    head++;
    arr[tail] = arr[head];
    tail++;
    head++;
  }
  return result;
}
let arr = [6,3,1,7,5,8,9,2,4]
console.log(getQQ(arr))