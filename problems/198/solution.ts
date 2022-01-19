/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let i = 0;
  while (i++ < k) {
    nums.unshift(nums.pop());
  }
}
