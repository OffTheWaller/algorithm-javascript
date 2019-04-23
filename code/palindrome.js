/**
 * 判断一个字符串是否是回文
 */
var str = 'abccba'
//用一个数组来作为栈
function isPalinDrome (str) {
  var arr = str.split('');
  var mid = Math.floor(arr.length / 2);
  var stack = [],
  top = 0;
  //入栈
  for (var i=0; i<mid; i++) {
    stack[++top] = arr[i];
  }
  let next;
  if (arr.length % 2 == 0) {
    next = mid;
  } else {
    next = mid + 1;
  }
  //出栈比较后半段
  for (var j=next; j<=arr.length-1; j++) {
    if (stack[top] !== arr[j]) {
      break;
    } else {
      top--;
    }
  }
  if (top === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalinDrome(str));