function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//入队
function enqueue(ele) {
    this.dataStore.push(ele);
}
//出队
function dequeue() {
    return this.dataStore.shift();
}
//获取队首
function front() {
    return this.dataStore[0];
}
//获取队尾
function back() {
    return this.dataStore[this.dataStore.length -1];
}
//显示队列
function toString() {
    var retStr = '';
    for (var i=0; i<this.dataStore.length; i++) {
        retStr += this.dataStore[i] + '\n';
    }
    return retStr;
}
//判空
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

//测试代码
var q = new Queue();
q.enqueue('tom');
q.enqueue('jerry');
q.enqueue('jack');
console.log(q.toString())
console.log('front is' + q.front())
console.log('back is' + q.back())


