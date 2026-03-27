// leetcode 232. Implement Queue using Stacks


var MyQueue = function() {
    this.stack1 = []; //main
    this.stack2 = [];  //helper
};

// /** 
//  * @param {number} x
//  * @return {void}
//  */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

// /**
//  * @return {number}
//  */
MyQueue.prototype.pop = function() {
    let n = this.stack1.length;
    for(let i = 0; i<n-1; i++){
        this.stack2.push(this.stack1.pop());
    }
    let popEle = this.stack1.pop();
   for(let i = 0; i < n-1; i++){
    this.stack1.push(this.stack2.pop()); 
   }
   return popEle;
};

// /**
//  * @return {number}
//  */
MyQueue.prototype.peek = function() {
    let n = this.stack1.length;
    for(let i = 0; i<n-1; i++){
        this.stack2.push(this.stack1.pop());
    }
    let peekEle = this.stack1[0];
   for(let i = 0; i < n-1; i++){
    this.stack1.push(this.stack2.pop()); 
   }
   return peekEle;
};

// /**
//  * @return {boolean}
//  */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */