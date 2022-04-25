/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
  private nextNum: number;

  constructor(private iterator: Iterator) {
    this.nextNum = this.iterator.next();
  }

  peek(): number {
    return this.nextNum;
  }

  next(): number {
    const ret = this.nextNum;
    if (this.iterator.hasNext())
      this.nextNum = this.iterator.next();
    else
      this.nextNum = -1

    return ret;
  }

  hasNext(): boolean {
    return this.nextNum > 0;
  }
}

/**
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(iterator)
* var param_1 = obj.peek()
* var param_2 = obj.next()
* var param_3 = obj.hasNext()
*/