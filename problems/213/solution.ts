function rob(nums: number[]): number {
  if (nums.length <= 3) return Math.max(...nums);

  // 1, 2, 3, 0

  const result = new Array(nums.length).fill(-Infinity);
  result[0] = nums[0]
  result[1] = nums[1]

  for (let i = 2; i < result.length - 1; i++) {
    for (let j = 2; i - j >= 0; j++)
      result[i] = Math.max(result[i], result[i - 1], nums[i] + result[i - j]);
  }
  // console.log("first", result)
  const maxWithFirst = Math.max(...result);

  for (let i = 0; i < result.length; i++)
    result[i] = -Infinity
  result[1] = nums[1]
  result[2] = nums[2]

  for (let i = 3; i < result.length; i++) {
    for (let j = 2; i - j >= 0; j++)
      result[i] = Math.max(result[i], result[i - 1], nums[i] + result[i - j]);
  }
  // console.log("second", result)

  return Math.max(maxWithFirst, Math.max(...result));



  // const getMaxStartAt0 = (idx) => {
  //   if (idx >= nums.length - 1) return 0;
  //   return nums[idx] + Math.max(getMaxStartAt0(idx + 2), getMaxStartAt0(idx + 3))
  // }

  // const getMax = (idx: number, withFirst: boolean) => {
  //   if (idx >= nums.length) return 0;
  //   return nums[idx] + Math.max(getMax(idx + 2), getMax(idx + 3))
  // }

  // return Math.max(getMaxStartAt0(0), getMax(1), getMax(2));
};