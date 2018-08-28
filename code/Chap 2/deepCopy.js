function deepCopy(arr1, arr2) {
    for (var i=0; i<arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}
//测试
var nums = [1,2,3,4,5];
var newnums = [];
deepCopy(nums, newnums);
console.log(newnums);