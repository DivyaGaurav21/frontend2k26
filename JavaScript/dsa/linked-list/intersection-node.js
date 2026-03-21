// leetcode - 160

var getIntersectionNode = function(headA, headB) {
    let headBelement = new Set();
    let currA=headA;
    let currB = headB;
    while(currB){
        headBelement.add(currB);
        currB=currB.next;
    };
    while(currA){
        if(headBelement.has(currA)) return currA;
        currA=currA.next;
    }
   return null;
};