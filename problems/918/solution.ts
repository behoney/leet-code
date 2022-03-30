function maxSubarraySumCircular(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const globalMin = Math.min(...nums)
  const globalMax = Math.max(...nums)

  if (globalMin >= 0) return nums.reduce((acc, e) => acc + e)
  if (globalMax < 0) return globalMax;

  const subArrayResults = new Array(nums.length).fill(-Infinity);
  let result = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let localMax = -Infinity, acc = 0;
    for (let j = 0; j < nums.length - 1; j++) {
      acc = acc + nums[i + j];
      localMax = Math.max(localMax, acc);
    }
    result = Math.max(localMax, result,
      acc + nums[nums.length - 1], acc + nums[nums.length - 1] + subArrayResults[0])
    subArrayResults[i] = localMax;
  }
  // for (let i = 0; i < nums.length; i++) {
  //   let max = -Infinity, acc = 0;

  //   for (let j = 0; j < nums.length; j++) {
  //     if (i + j >= nums.length) {
  //       acc = acc + nums[(i + j) % nums.length];
  //       // subArrayResults
  //     }
  //     else
  //       acc = acc + nums[(i + j)];
  //     max = Math.max(max, acc);
  //   }
  //   result = Math.max(max, result)
  //   subArrayResults[i] = result;
  //   console.log(subArrayResults);

  // }
  return result;
};