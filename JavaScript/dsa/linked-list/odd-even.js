// Leetcode 328. Odd Even Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let oddHead = head;
    let evenHead = head.next;
    let oddPointer = oddHead;
    let evenPointer = evenHead;
while(oddPointer.next && evenPointer.next){
    oddPointer.next = oddPointer.next.next;
    evenPointer.next = evenPointer.next.next;
    oddPointer = oddPointer.next;
    evenPointer = evenPointer.next;
}
oddPointer.next = evenHead;
return head;
};