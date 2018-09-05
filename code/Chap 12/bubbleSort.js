//比较相邻两元素，如果前一个比后一个大，就交换位置

function bubbleSort(arr) {
    for (var i=0; i<arr.length -1; i++) {
        for (var j=0; j<arr.length - i -1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

var arr = [2,6,3,8,4,9,33,56,11];
bubbleSort(arr);
console.log(arr);