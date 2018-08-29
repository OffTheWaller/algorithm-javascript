function isEven(num) {
    return num % 2 == 0;
}
var nums = [2,3,4,6,8];
var even = nums.every(isEven);
if (even) {
    console.log('all even')
} else {
    console.log('not all even')
}