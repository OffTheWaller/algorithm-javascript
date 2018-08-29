function List() {
    this.listSize = 0;
    //用来保存当前位置
    this.pos = 0;
    //初始化一个空数组保存列表元素
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    //返回当前位置
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

//向列表添加元素
function append(element) {
    this.dataStore[this.listSize++] = element;
}
//查找列表中的元素，返回此元素在列表中的位置，如果没有返回-1
function find(ele) {
    for (var i=0; i<this.dataStore.length; i++) {
        if (this.dataStore[i] == ele) {
            return i;
        }
    }
    return -1;
}
//删除指定元素
function remove(ele) {
    var foundAt = this.find(ele);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}
//返回列表元素个数
function length() {
    return this.listSize;
}
//显示列表
function toString() {
    return this.dataStore;
}
//向列表中指定元素的后面插入元素
function insert(ele, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, ele);
        ++this.listSize;
        return true;
    }
    return false;
}
//清空列表
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
//判断给定值是否在列表中
function contains(ele) {
    for (var i=0; i<this.dataStore.length; i++) {
        if (this.dataStore[i] == ele) {
            return true;
        }
    }
    return false;
}
//在列表上移动位置
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize-1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}







//测试代码
// var names = new List();
// names.append('tom');
// names.append('jerry');
// names.append('bob');
// names.append('joe');
// console.log(names.toString());
// names.remove('jerry');
// console.log(names.toString());
// console.log(names.length());
// names.clear();
// console.log(names.toString());




