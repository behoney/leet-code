function searchInsert(nums: number[], target: number): number {
  if (nums?.length == 0) return 1;
  let upper: number = nums.length,
    lower: number = 0;

  while (true) {
    const middle = Math.floor((upper + lower) / 2);

    if (middle == lower || middle == upper)
      return nums[middle] < target ? middle + 1 : middle;

    if (nums[middle] === target) return middle;

    if (nums[middle] > target) upper = middle;
    else lower = middle;
  }
}
