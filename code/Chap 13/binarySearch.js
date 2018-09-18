/**
 * 二分查找思路：
 * 首先二分查找必须是有序的数组
 * 1.定义双指针
 * 2.拿目标和中间的数比较
 * 3.如果小就让大指针等于中间-1
 * 4.如果大就让小指针等于中间+1
 * 5.直到待查找元素等于中间值，返回
 */
function binarySearch(arr, target) {
    //定义双指针
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = parseInt(start + (end - start) / 2);
        if (target == arr[mid]) {
            return mid;
        }else if (target > arr[mid]) {
            start = mid + 1;
        }else {
            end = mid -1;
        }
    }
    return -1;
}
var testArr = [2,3,5,8,12,33,56,78];
console.log(binarySearch(testArr,56));