function search(nums: number[], target: number): number {
  return nums.indexOf(target);

  if (nums.length == 1) return target == nums[0] ? 0 : -1;
  // if (!nums.some((e) => e == target)) return -1;

  const searchHelp = (up: number, low: number): number => {
    const mid = Math.floor((up + low) / 2);

    console.log(mid, nums[mid]);

    if (nums[mid] == target) {
      return mid;
    }

    if (up == low) return -1;

    if (nums[mid] >= target) return searchHelp(mid, low);
    else return searchHelp(up, mid + 1);
  };

  let result = -1;
  let pivot = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (pivot < nums[i]) pivot = nums[i];
    else {
      pivot = i;
      break;
    }
  }

  // console.log(pivot);

  if (target >= nums[0]) result = searchHelp(pivot, 0);
  else result = searchHelp(nums.length - 1, pivot);

  return result;
}
