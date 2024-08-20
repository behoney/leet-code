// NOTE:: rep1, 8min 16sec

var RecentCounter = function() {
    this.array = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.array.push(t)
    return this.array.filter(val => t - 3000 <= val && val <= t).length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */