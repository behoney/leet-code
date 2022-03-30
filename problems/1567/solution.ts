function getMaxLen(nums: number[]): number {
  if (nums.length === 1) return nums[0] <= 0 ? 0 : 1;

  const arr = nums.map(e => Math.abs(e) / e);

  let maxLen = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if(temp === 1) maxLen = Math.max(maxLen, 1)
    for (let j = 1; i + j < arr.length; j++) {
      temp = temp * arr[i + j];
      if (temp === 0) break;
      if (temp === 1) maxLen = Math.max(maxLen, j + 1)
    }
  }

  return maxLen < 0 ? 0 : maxLen;
};