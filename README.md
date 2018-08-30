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