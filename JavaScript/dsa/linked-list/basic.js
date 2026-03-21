let Node = function (val) {
  this.val = val;
  this.next = null;
};

let LinkedList = function () {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (curr === null) return -1;
    curr = curr.next;
  }
  return curr ? curr.val : -1;
};

LinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

LinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

LinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return -1;
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  let curr = this.head;
  let newNode = new Node(val);
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  let temp = curr.next;
  curr.next = newNode;
  newNode.next = temp;
  this.size++;
};

LinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

LinkedList.prototype.print = function () {
  let curr = this.head;
  let result = "";

  while (curr) {
    result += curr.val + " -> ";
    curr = curr.next;
  }

  console.log(result + "null");
};

LinkedList.prototype.findIindex = function (num) {};



const list = new LinkedList();
list.addAtTail(12);
list.addAtTail(13);
list.addAtTail(14);
list.addAtTail(15);
list.addAtTail(16);
list.addAtTail(17);
list.print();
// console.log(list.findMiddle());
list.reverse();
list.print();
