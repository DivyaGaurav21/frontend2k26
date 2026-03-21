LinkedList.prototype.reverse = function () {
  let curr = this.head;
  let prev = null;
  while (curr != null) {
   let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  this.head = prev;
  // console.log(curr.next);
};
