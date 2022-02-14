class Solution {

  private buffer: number[][] = [];
  private isSuffled: boolean;


  constructor(public nums: number[]) {
    this.nums = nums;

  }

  reset(): number[] {
    if (this.isSuffled) {

      this.buffer.length = 0;
      for (let i = 0; i < this.nums.length; i++)
        this.getPermutation(i, [])
    }
    return this.nums
  }

  shuffle(): number[] {
    if (!this.isSuffled)
      for (let i = 0; i < this.nums.length; i++)
        this.getPermutation(i, [])

    this.isSuffled = true;

    return this.buffer[Math.floor(Math.random() * this.buffer.length)]
  }

  getPermutation(idx: number, current: number[]): void {
    if (idx >= this.nums.length) return;

    if (current.length == this.nums.length) {
      this.buffer.push(current)
      return;
    }

    if (!current.includes(this.nums[idx]))
      for (let i = 1; i < this.nums.length; i++) {
        this.getPermutation(
          (idx + i) % this.nums.length,
          [...current, this.nums[idx]])
      }

    return;
  }
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/