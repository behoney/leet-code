// Rep1 ~ 9min 4sec

var SmallestInfiniteSet = function() {
    this.counter = 1
    this.store = []
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.store.length && this.store.at(0) < this.counter)
        return this.store.shift()
    return this.counter++
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(this.counter > num && !(new Set(this.store)).has(num)){
        this.store.push(num)
        this.store.sort((a,b)=>a-b)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */