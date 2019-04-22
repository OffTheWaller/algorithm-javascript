function LinkedList () {
  let Node = function (ele) {
    this.ele = ele;
    this.next = null;
  }
  let length = 0;
  let head = null;
  this.append = function (ele) {
    let node = new Node(ele),
    current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head,
      previous,
      index = 0;
      if (position === 0) {
        head = current.next;
      } else {
        //找要删除的，存到current
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.ele;
    } else {
      return null;
    }
  }
  this.toString = function () {
    let current = head,
    string = '';
    while (current) {
      string += current.ele + (current.next ? 'n' : '');
      current = current.next;
    }
    return string;

  }
  this.indexOf = function (ele) {
    let current = head,
    index = 0;
    while (current) {
      if (current.ele === ele) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }
    return -1;
  }
  this.remove = function (ele) {
    let index = this.indexOf(ele);
    return this.removeAt(index);
  }
}

let list = new LinkedList();
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.remove(20)
console.log(list.toString())