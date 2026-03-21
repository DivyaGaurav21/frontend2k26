// leetcode 19. Remove Nth Node From End of List 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinalNode = new ListNode();
    sentinalNode.next = head;
    let curr = sentinalNode;
    let length = 0;
    while(head){
        length++;
        head=head.next;
    }
  let deleteAtIndex = length - n;

for(let i = 0; i<deleteAtIndex; i++){
  curr = curr.next;
}
curr.next = curr.next.next;
return sentinalNode.next;
};