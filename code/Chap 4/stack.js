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

//入栈
function push(ele) {
    this.dataStore[this.top++] = ele;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top -1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

//测试代码
// var s = new Stack();
// s.push('tom');
// s.push('jerry');
// console.log(s.length())
// var popped = s.pop();
// console.log(s.peek())
// s.clear();
// console.log(s.length())