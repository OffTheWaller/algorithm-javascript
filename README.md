## 数据结构与算法

### Chap 1

- 无返回值的函数叫子程或void函数
- 省略var关键字自动将变量提升为全局作用域
- javascript中没有块儿级作用域
- 任何可以被递归定义的函数，都可以被改写为迭代式的程序

### Chap2 数组

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

- `join()`和`toString()`方法将数组转为字符串，元素之间用逗号分隔；`join()`可以传入需要制定的分隔符，传入空字符串可以无缝连接

- `concat()`方法合并数组，返回新数组；`splice()`方法截取数组，第一个参数是起始索引，第二个参数是截取长度；`splice()`方法可以插入元素到数组，第一个参数为起始位置，第二个0，第三个是要插入的元素

- 向数组添加元素：`unshift()`和`push()`

- 删除数组中的元素：`shift()`和`pop()`，方法的返回值是被删除的元素

- `reverse()`方法翻转数组元素

- `sort()`方法按字典顺序排序，若要按数字大小排序，传入比较函数即可

- **不产生新数组的迭代器方法**：`forEach()`，参数为一个函数，对数组中每个元素使用该函数

- `every()`方法接受一个返回值为布尔类型的函数，对数组中每个元素执行该函数，如果都返回true，则`every()`方法返回true

- ```javascript
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
  ```

- `some()`方法也接受一个返回值为布尔类型的函数，对数组中每个元素执行该函数，如果其中有一个元素使函数返回true，则`some()`方法返回true

- `reduce()`和`reduceRight()`方法接受一个函数，返回一个值。可用于累加或者拼接字符串

- **产生新数组的迭代器方法**：`map()`和`forEach()`一样，参数为一个函数，但会返回一个新数组

- `filter()`方法和`every()`类似，接受一个返回值是布尔类型的函数，但是`filter()`会返回一个新数组，该新数组中的元素是使传入函数为ture的元素

### Chap3 列表

- 列表的抽象数据类型定义

- | 属性和方法   | 注释                         |
  | ------------ | ---------------------------- |
  | listSize     | 列表元素个数                 |
  | pos          | 列表当前位置                 |
  | length()     | 返回列表中元素个数           |
  | clear()      | 清空列表所有元素             |
  | toString()   | 返回列表字符串形式           |
  | getElement() | 返回当前位置元素             |
  | insert()     | 在现有元素后插入新元素       |
  | append()     | 在列表末尾添加新元素         |
  | remove()     | 从列表中删除元素             |
  | front()      | 将当前位置移动到第一个元素   |
  | end()        | 将当前位置移动到最后一个元素 |
  | prev()       | 将当前位置后移一位           |
  | next()       | 将当前位置前移一位           |
  | currPos()    | 返回列表的当前位置           |
  | moveTo()     | 将当前位置移动到指定位置     |

- 注意：位置索引是从0开始的

- `trim()`方法删除末尾空格

### Chap4 栈

- 栈是一种特殊的列表，只能通过一端访问其元素，这一端称为栈顶

- 后入先出，先入后出

- 入栈：`push()`

- 出栈：`pop()`

- `peek()`方法用于预览栈顶元素，而不删除

- 栈类构造函数

- ```javascript
  function Stack() {
      this.dataStore = [];
      //将栈顶标识为数组的第一个元素
      this.top = 0;
      this.push = push;
      this.pop = pop;
      this.peek = peek;
      this.clear = clear;
      this.length = length;
  }
  ```

- 栈的应用

  - 数制间的转换
  - 回文：从前往后写跟从后往前写一样，栈可以用来判断是否是回文
  - 可以模拟递归过程

### Chap5 队列

- 队列是一种列表，先进先出

- ```javascript
  function Queue() {
      this.dataStore = [];
      this.enqueue = enqueue;
      this.dequeue = dequeue;
      this.front = front;
      this.back = back;
      this.toString = toString;
      this.empty = empty;
  }
  ```

- 基数排序问题

- 优先队列：从队列中删除元素时先删除优先级最高的元素

### Chap6 链表

- js中的数组被实现成了对象，与java相比效率低

- 数组元素靠他们的位置进行引用，链表元素靠相互之间的关系进行引用

- 链表的优点：增加和删除快；数组增加和删除慢

- 链表中的节点包含两个属性：一个是本身存储的元素，一个是指向下个元素的链接

- ```javascript
  //Node类表示节点
  function Node(ele) {
      this.ele = ele;  //存节点元素
      this.next = null;  //存链接
  }
  //LinkedList类提供操作的方法
  function LList() {
      this.head = new Node('head');  //head节点
      this.find = find;
      this.insert = insert;
      this.remove = remove;
      this.display = display;
  }
  ```

- 双向链表

  - 增加一个previous属性，存储指向前驱节点的链接

- 循环链表：链表的尾节点指向头节点

### Chap7 字典

- 键值对的形式存储数据的数据结构
- js有个内置函数delete，同时删除掉键和与其关联的值
- Array中如果键的值不是数字类型的索引，如果是字符串类型的键，这时候length属性失效
- `Object.keys`方法可以获取Array中所有的key值

### Chap8 散列

- 散列的数据结构叫做散列表
- 优点：插入，删除，取用快，查找慢
- 使用散列函数将键映射为唯一的数组索引，如果映射时将两个键映射为了同一个索引值，叫做`碰撞`
- HashTable类
- 选择散列函数非常重要
- `charCodeAt()`可以获取到单个字符的ACSII码值
- 碰撞处理
  - 开链法
  - 线性探测法

### Chap9 集合

- 集合（set）是一种包含不同元素的数据结构

- 集合中的元素称为成员

- 集合中的成员是无序的，集合中不允许有重复元素

- 对集合的操作：并集、交集、补集

- 定义Set类

- Set类中的add方法需要判断元素是否存在

- ```javascript
  function add(data) {
      if (this.dataStore.indexOf(data) < 0) {
          this.dataStore.push(data);
          return true;
      } else {
          return false;
      }
  }
  ```

- 定义`union()`方法并集，`intersect()`求交集，`subset()`判断是否为子集，`difference()`方法求补集

### Chap10 二叉树和二叉查找树

- 树是一种非线性存储结构，分层存储
- 没有任何子节点的节点称为叶子节点
- 树的根节点是第0层
- 二叉树每个节点的子节点不允许超过两个
  - 二叉树节点的度：该节点所含子树个数
  - 二叉树的度：节点的度的最大值为二叉树的度
- 二叉树的性质
  - 二叉树第i层上的节点数目最多为2^i-1(i>=1)
  - 深度为k的二叉树至多有2^k-1个节点(k>=1)
  - 包含n个节点的二叉树的高度至少为(log2为底数N的对数)+1

```
面试题：如果一个完全二叉树的节点总数为768个，求叶子节点的个数
总结：如果完全二叉树的节点总数为n，那么叶子节点等于n/2(n为偶数)或者(n+1)/2(n为奇数)
```

- `二叉查找树`：相对较小的值保存在左节点中，较大的值保存在右节点中
- 二叉树要定义的第一个对象就是节点 Node类
- 二叉查找树类：BST
- 三种遍历方式：
  - 中序遍历：左 根 右
  - 先序遍历：根 左 右
  - 后序遍历：左 右 根
- 遍历的时候按照左右子树和根节点分开来看，上面写的左代表左子树，右代表右子树
- 对BST常用的三种查找方式：
  - 查找给定值
  - 查找最小值：遍历左子树
  - 查找最大值：遍历右子树
- 删除操作最复杂
- 用途：计数

### Chap12 排序算法（重要）

- Array.prototype.sort()方法使用最多，对数组原地排序，或者按指定顺序进行排序，默认是按Unicode编码

- 数组测试平台类

- ```javascript
  function CArray() {
      
  }
  ```

- `Math.random()`方法获取一个[0,1)的随机数

- 冒泡排序

- ```javascript
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
  ```

- 选择排序

```javascript
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
```

- 插入排序

- ***

- 高级排序算法：

- 快速排序

```javascript
/*
快速排序：利用递归的思想
例如数组a =[2 4 1 8 9 7 3]  
思路：1.找一个基准数，例如数组第一个数2，比2小的放左边，比2大的放右边，此时2的定位就结束
    2.定义指针i,j，先让j从右边开始--，找小于2的数，找到发现为1，也就是a[2]停下来
    3.让i++，从左往右找大于2的数，找到发现为4，也就是a[1]，停下来
    4.交换这两个数，即a[2]和a[1]交换，得到新数组[2 1 4 8 9 7 3]
    5.让j继续--，刚走了一步发现在a[1]这个位置，i与j相遇了，这个相遇的位置就是基准数2的定位
    6.所以此时交换a[0]和a[1]，此时新数组为[1 2 4 8 9 7 3]，此时基准数2归位
    7.基准数2归位后将数组分为左右两边，[1] [4 8 9 7 3]，分别对左右两个数组重复之前的操作，直到不能一直分下去，排序结束
*/

//以上不用新数组的实现方法，直接对原数组进行排序，代码实现有待学习

/**
 * 还有一种是借助创建两个新数组，分别用来存比基准值大的和比基准值小的数据
 * 代码实现起来简单
 */
function quickSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];  //放小于基准数的数
    var greater = []; //放大于基准数的数
    var pivot = list[0]; //基准数
    for (var i=1; i<list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}
var arr = [12,32,4,78,56,43,21];
console.log(quickSort(arr));
```

- 希尔排序
- 归并排序
- 堆排序