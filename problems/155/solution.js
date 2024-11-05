
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(!this.minStack.length || this.minStack.at(-1) >= val)
        this.minStack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const val = this.stack.pop()
    if(this.minStack.at(-1) === val) this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.at(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */