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
    this.findPrevious = findPrevious;
}

//根据数据查找节点
function find(item) {
    var currNode = this.head;
    while (currNode.ele != item) {
        currNode = currNode.next;
    }
    return currNode;
}

//在已知节点后面插入一个新节点
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
//显示链表元素
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.ele);
        currNode = currNode.next;
    }
}
//根据数据查找上一个节点
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.ele != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
//删除节点
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

//测试
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Lanzhou", "Alma");
cities.display();
cities.remove("Alma");
cities.display();