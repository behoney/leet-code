class FreqStack {
  stack = [];
  countObj = {};
  constructor() {
    this.countObj[-1] = -Infinity;
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.countObj[val] === undefined)
      this.countObj[val] = 0;
    this.countObj[val] += 1;
  }

  pop(): number {
    let result = 0;

    let maximumCount = -1;
    for (const e of Object.values(this.countObj))
      if (typeof e === "number")
        maximumCount = Math.max(maximumCount, e)

    console.log(maximumCount)

    for (let i = this.stack.length; i >= 0; i--) {
      if (maximumCount === this.countObj[this.stack[i]]) {
        result = this.stack[i];
        this.countObj[this.stack[i]] -= 1
        if (this.countObj[this.stack[i]] === 0) delete this.countObj[this.stack[i]];
        this.stack.splice(i, 1);
        break;
      }
    }
    // console.log(result, this.maxCount, this.stack);

    return result;
  }

  /**
   * pop(): number {

    const targetKeys = this.getKeysOfMostFrequent();

    let maxKey = -1;
    let highestIdx = -1;

    for (const e of targetKeys) {
      const maxIdxOfElement = this.stackObj[e][this.stackObj[e].length - 1];
      if (highestIdx < maxIdxOfElement) {
        highestIdx = maxIdxOfElement;
        maxKey = e;
      }
    }

    this.stackObj[maxKey].pop();
    if (this.stackObj[maxKey].length === 0) delete this.stackObj[maxKey];

    return maxKey;

  }

  getKeysOfMostFrequent(): number[] {
    const result = [];
    let max = -1;
    for (const e of Object.keys(this.stackObj)) {
      if (this.stackObj[e].length > max) {
        max = this.stackObj[e].length;
        result.length = 0;
        result.push(e)
      }
      else if (this.stackObj[e].length === max) {
        result.push(e)
      }
    }

    return result;
  }
   */
}

/**
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/