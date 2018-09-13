/**
 * 插入排序原理：
 * 1.从第一个元素开始，认为该元素已经排序
 * 2.取出下一个元素，并且从后向前扫描已经排好序的元素
 * 3.如果该元素（已排序）大于新元素，就把该元素后移一位
 * 4.直到在已排序的元素中找到小于等于新元素的元素
 * 5.把新元素插入到该位置后一位
 * 6.重复2-5步，一直要把最后一位插入，就排序完成
 */
function insertSort(arr) {
    //默认第[0]位已经排好序，所以i从1开始
    for (var i=1; i<arr.length; i++) {
        var temp = arr[i];  //新元素
        var j = i - 1;  //用于从后向前扫描已排序的数组
        while (j>=0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        //找到arr[j]<=temp，把temp放到arr[j+1]
        arr[j+1] = temp;
    }
    return arr;
}
var arr = [23,43,12,78,3,2,67,32];
console.log(insertSort(arr))