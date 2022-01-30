function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.some(e => e == target)) return 1;
  if (nums.length == 1) return nums[0] == target ? 1 : 0

  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return 1;
    const test = [...nums];
    for (let j = i + 1; j < nums.length; j++) {
      test[j] += test[j - 1];
      if (test[j] >= target) {

        result = Math.min(result, j - i + 1);
        // console.log(i, j, test[j], test, result);
      }

    }
    // console.log(i, test)
  }

  return result == Infinity ? 0 : result;
};