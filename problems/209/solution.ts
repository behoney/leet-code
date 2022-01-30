function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0;
  let j = 0;
  let sum = undefined;
  let min = Infinity;

  const len = nums.length;

  while (i < len && j < len) {

    // the minimum can't be less that one ;)
    if (min === 1 || nums[i] >= target) return 1;

    if (sum === undefined) {
      // the first number
      sum = nums[i];
      i++;
    }

    while (sum < target) {
      sum += nums[i];
      i++;
    }

    while (sum >= target) {
      min = Math.min(min, i - j);
      sum -= nums[j];
      j++;
    }
  }

  return min === Infinity ? 0 : min;
//----------------------------------------------------------------

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