// leetcode - 141 

var hasCycle = function(head) {
   let seenNodes = new Set();
   let curr = head;
   while(curr){
    if(seenNodes.has(curr)) return true;
     seenNodes.add(curr);
     curr = curr.next;
   } 
   return false;
};

//FLoyd's cycle findinig algorithm
//slow and fast pointer approach
var hasCycle = function(head) {
if(!head) return false;
let slow = head;
let fast = head.next;
while(slow != fast){
     if(fast === null || fast.next === null) return false;  
    slow = slow.next;
    fast = fast.next.next;
}
return true;
}
