## 数据结构与算法

### Chap 1

- 无返回值的函数叫子程或void函数
- 省略var关键字自动将变量提升为全局作用域
- javascript中没有块儿级作用域
- 任何可以被递归定义的函数，都可以被改写为迭代式的程序

### Chap 数组

- js中的对象的属性名必须是字符串

- Array在js中是一种特殊的对象

- 创建，方括号[ ]， 或者直接new Array()

- js数组中的元素不必是同一种数据类型

- `Array.isArray(检测数组)`用来判断是否是一个数组

- 字符串的`split()`方法可以生成数组，传入分隔符，返回数组

- `浅复制`，只是将原数组的引用复制给了一个新的变量

- ```
  var nums = [1,2,3,4,5]
  var nums2 = nums
  ```

- `深复制`，将数组中的每一个元素都复制到新数组中

- ```javascript
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
  ```

- `indexOf()`方法判断一个元素在数组中是否存在，如果存在返回索引值；如果不存在，返回-1。如果存在相同元素，返回第一个索引值。同类还有`lastIndexOf()`方法

- `join()`和`toString()`方法将数组转为字符串，元素之间用逗号分隔

- `concat()`方法合并数组，返回新数组；`splice()`方法截取数组，第一个参数是起始索引，第二个参数是截取长度

- 