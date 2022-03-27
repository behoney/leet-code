function canJump(nums: number[]): boolean {
  if (nums.length == 1) return true;
  const availableCell = new Array(nums.length).fill(false)
  availableCell[0] = true;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentMax >= nums.length - 1) return true;
    if (availableCell[i]) {
      for (let j = 1; j <= nums[i]; j++) {
        availableCell[i + j] = true;
      }
      currentMax = Math.max(i + nums[i])
    }
  }
  return false;

  // const goToNext = (idx) => {
  //   if (idx == nums.length - 1) return true;
  //   if (availableCell[idx] === true) {
  //     let result = false;
  //     for (let i = 1; i <= nums[idx]; i++) {
  //       availableCell[idx + i] = true;
  //       result = result || goToNext(idx + i);
  //     }
  //     return result;
  //   }
  //   return false;
  // }

  // return goToNext(0);
};