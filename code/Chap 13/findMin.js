//查找数组中的最小值
function findMin (arr) {
    var min = arr[0];
    for (var i=1; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
var arr = [12,32,66,44,77,345,43,5,45];
var min = findMin(arr);
console.log(min)