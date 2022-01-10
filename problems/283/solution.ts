/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length <= 1 || nums.every((e) => e == 0)) return;
  let count: number = 0;
  const test = (e: number) => {
    if (e == 0) {
      count++;
      return false;
    }
    return true;
  };
  nums.splice(0, nums.length, ...nums.filter(test));

  nums.push(...new Array(count).fill(0));
}
