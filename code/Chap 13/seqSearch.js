//顺序查找思路：挨个比较待查找元素，找到返回true
function seqSearch(arr, data) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] = data) {
            return true;
        }
    }
    return false;
}