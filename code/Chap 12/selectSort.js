/**
 * 选择排序思路：
 * 1.从第二位开始，依次拿元素和第一个位置上的数进行比较，如果小就交换
 * 2.这样一轮下来，第一个位置就确定为了最小的元素
 * 3.继续和第二个位置的数比较
 * 外层循环从数组第一个元素移动到倒数第二个元素，最后一个元素自动就确定了。
 * 内层循环从第二个元素移动到最后一个元素。
 * 和冒泡排序的区别是：选择排序按位置依次确定元素
 */

function selectSort(arr) {
    var length = arr.length;
    var temp;
    for (var i=0; i<=length-2; i++) {
        for (var j=i+1; j<=length-1; j++) {
            if (arr[j] < arr[i]) {
                //交换
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var arr = [2,5,4,3,6,32,89,12];
console.log(selectSort(arr));